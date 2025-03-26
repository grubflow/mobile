import { authRequestWithDispatch } from '../actions'
import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    SET_USER_REQUEST,
    SET_USER_FAILURE,
    SET_USER_SUCCESS,
    SET_LOGGED_IN
} from '../reducers/user'
import { AppDispatch, UseAppSelector } from '../store'
import { Error } from '../types'
import { setKey } from '../utils/storage'

export const getCurrentUser = () => {
    return async (dispatch: AppDispatch) => {
        return authRequestWithDispatch({
            method: 'GET',
            dispatch,
            endpoint: 'current',
            types: [GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE]
        })
    }
}

export const signUpUser = (
    email: string,
    password: string,
    username: string
) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: SET_USER_REQUEST })
        try {
            const createUserPromise = await fetch(
                'http://localhost:8000/api/users/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                }
            )

            if (createUserPromise.ok) {
                dispatch({
                    type: SET_USER_SUCCESS,
                    payload: await createUserPromise.json()
                })
                setKey('user_token', 'true')
                return dispatch({ type: SET_LOGGED_IN })
            } else
                return dispatch({
                    type: SET_USER_FAILURE,
                    payoad: await createUserPromise.json()
                })
        } catch (error: any) {
            console.log('Sign Up Error: ', error)

            return dispatch({
                type: SET_USER_FAILURE,
                payload: {
                    message: error.message,
                    code: 500
                }
            })
        }
    }
}

export const signInUser = (username: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: GET_USER_REQUEST })

        try {
            const signInUserPromise = await fetch(
                'http://localhost:8000/api/users/token/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            )

            const payloadJSON = await signInUserPromise.json()

            if (signInUserPromise.ok) {
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: payloadJSON
                })
                return dispatch({
                    type: SET_LOGGED_IN
                })
            } else {
                console.log('Error: ', payloadJSON)
                return dispatch({
                    type: GET_USER_FAILURE,
                    payload: payloadJSON
                })
            }
        } catch (error: any) {
            console.log('Sign In Error: ', error)

            return dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    message: error.message,
                    code: 500
                }
            })
        }
    }
}
