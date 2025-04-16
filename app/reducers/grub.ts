import { UnknownAction } from '@reduxjs/toolkit'
import { Error, GrubState, Swipable } from '../types'

export const GET_GRUB_TASTE_REQUEST = '@@grub/GET_GRUB_TASTE_REQUEST'
export const GET_GRUB_TASTE_SUCCESS = '@@grub/GET_GRUB_TASTE_SUCCESS'
export const GET_GRUB_TASTE_FAILURE = '@@grub/GET_GRUB_TASTE_FAILURE'

export const SET_GRUB_TASTE_REQUEST = '@@grub/SET_GRUB_TASTE_REQUEST'
export const SET_GRUB_TASTE_SUCCESS = '@@grub/SET_GRUB_TASTE_SUCCESS'
export const SET_GRUB_TASTE_FAILURE = '@@grub/SET_GRUB_TASTE_FAILURE'

export const CLEAR_GRUB_TASTE = '@@grub/CLEAR_GRUB_TASTE'

const InitialGrubState: GrubState = {
  loading: false,
  error: undefined,
  swipables: []
}

export default (state = InitialGrubState, action: UnknownAction) => {
  switch (action.type) {
    case GET_GRUB_TASTE_REQUEST:
    case SET_GRUB_TASTE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_GRUB_TASTE_SUCCESS:
      return {
        ...state,
        loading: false,
        swipables: action.payload as Swipable[]
      }
    case SET_GRUB_TASTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined
      }
    case SET_GRUB_TASTE_FAILURE:
    case GET_GRUB_TASTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as Error
      }
    default:
      return state
  }
}
