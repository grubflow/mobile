import { UnknownAction } from '@reduxjs/toolkit'
import { Error, Group, GroupInvite, GroupState } from '../types'

export const GET_GROUPS_REQUEST = '@@groups/GET_GROUPS_REQUEST'
export const GET_GROUPS_SUCCESS = '@@groups/GET_GROUPS_SUCCESS'
export const GET_GROUPS_FAILURE = '@@groups/GET_GROUPS_FAILURE'

export const SET_GROUPS_REQUEST = '@@groups/SET_GROUP_REQUEST'
export const SET_GROUPS_SUCCESS = '@@groups/SET_GROUP_SUCCESS'
export const SET_GROUPS_FAILURE = '@@groups/SET_GROUP_FAILURE'

export const GET_GROUP_INVITES_REQUEST = '@@groups/GET_GROUP_INVITE_REQUEST'
export const GET_GROUP_INVITES_SUCCESS = '@@groups/GET_GROUP_INVITE_SUCCESS'
export const GET_GROUP_INVITES_FAILURE = '@@groups/GET_GROUP_INVITE_FAILURE'

export const SET_GROUP_INVITES_REQUEST = '@@groups/SET_GROUP_INVITE_REQUEST'
export const SET_GROUP_INVITES_SUCCESS = '@@groups/SET_GROUP_INVITE_SUCCESS'
export const SET_GROUP_INVITES_FAILURE = '@@groups/SET_GROUP_INVITE_FAILURE'

export const ACCEPT_GROUP_INVITE = '@@groups/ACCEPT_GROUP_INVITE'

const InitialGroupState: GroupState = {
    loading: false,
    groups: [],
    invites: []
}

export default (state = InitialGroupState, action: UnknownAction) => {
    switch (action.type) {
        case GET_GROUPS_REQUEST:
        case SET_GROUPS_REQUEST:
        case GET_GROUP_INVITES_REQUEST:
        case SET_GROUP_INVITES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_GROUPS_SUCCESS:
            return {
                ...state,
                loading: false,
                groups: action.payload as Group[],
                error: undefined
            }
        case GET_GROUPS_FAILURE:
        case SET_GROUPS_FAILURE:
        case GET_GROUP_INVITES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload as Error,
            }
        case GET_GROUP_INVITES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                invites: action.payload as GroupInvite[]
            }
        case SET_GROUP_INVITES_SUCCESS:
        case SET_GROUPS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
            }
    }
}