import { GET_USER_FAILURE, SET_LOGGED_OUT } from '../reducers/user'
import { AppDispatch } from '../store'
import { Error } from '../types'
import { getKey } from '../utils/storage'

type RequestWithDispatchParams = {
    dispatch: AppDispatch
    endpoint: string
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE'
    types: [requestType: string, successType: string, errorType: string]
    data?: Record<string, any>
    headers?: Record<string, string>
}

export const requestWithDispatch = async ({
    dispatch,
    endpoint,
    method = 'GET',
    types,
    data,
    headers = { 'Content-Type': 'application/json' }
}: RequestWithDispatchParams) => {
    const [requestType, successType, errorType] = types

    try {
        console.log('starting request to ', endpoint)
        dispatch({ type: requestType })

        const response = await fetch(endpoint, {
            method,
            headers,
            ...(method !== 'GET' && data ? { body: JSON.stringify(data) } : {})
        })

        if (response.ok) {
            console.log('request to ', endpoint, ' successful')
            dispatch({ type: successType, payload: await response.json() })
            return
        }

        if (response.status === 403) {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    message: 'Token Expired',
                    status: 403
                }
            })
            dispatch({
                type: SET_LOGGED_OUT
            })
        }
    } catch (error: any) {
        console.error('request to ', endpoint, ' failed with error: ', error)
        dispatch({
            type: errorType,
            payload: { message: error.message, code: 500 } as Error
        })
    }

    return
}

export const authRequestWithDispatch = async ({
    dispatch,
    endpoint,
    method = 'GET',
    types,
    data,
    headers = { 'Content-Type': 'application/json' }
}: RequestWithDispatchParams) => {
    const userToken = getKey('user_token')

    if (!userToken) {
        dispatch({
            type: SET_LOGGED_OUT
        })
    }

    const combinedHeaders = { ...headers, Authorization: `Bearer ${userToken}` }

    return await requestWithDispatch({
        dispatch,
        endpoint,
        method,
        types,
        data,
        headers: combinedHeaders
    })
}
