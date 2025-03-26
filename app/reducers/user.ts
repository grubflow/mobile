import { UnknownAction } from '@reduxjs/toolkit'
import { 
    Error, 
    User,
    UserState,
} from '../types'

export const GET_USER_REQUEST = '@@user/GET_USER_REQUEST'
export const GET_USER_SUCCESS = '@@user/GET_USER_SUCCESS'
export const GET_USER_FAILURE = '@@user/GET_USER_FAILURE'

export const SET_USER_REQUEST = '@@user/SET_USER_REQUEST'
export const SET_USER_SUCCESS = '@@user/SET_USER_SUCCESS'
export const SET_USER_FAILURE = '@@user/SET_USER_FAILURE'

export const SET_LOGGED_OUT = '@@user/SET_LOGGED_OUT'
export const SET_LOGGED_IN = '@@user/SET_LOGGED_IN'
export const CLEAR_USER_ERRORS = '@@user/CLEAR_USER_ERRORS'

export const InitialUserState: UserState = {
    loading: false,
    loggedIn: false,
    user: undefined,
    error: undefined,
    token: undefined,
}

export default (state = InitialUserState, action: UnknownAction) => {
    switch (action.type) {
        case GET_USER_REQUEST:
        case SET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_SUCCESS:
        case SET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                user: action.payload as User,
            }
        case GET_USER_FAILURE:
        case SET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload as Error,
            }
        case SET_LOGGED_OUT:
            return {
                ...state,
                user: undefined,
            }

        case SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: true,
            }
        case CLEAR_USER_ERRORS:
            return {
                ...state,
                error: undefined,
            }
        default:
            return state
    }
}