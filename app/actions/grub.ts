import { authRequestWithDispatch } from '.'
import {
  GET_GRUB_TASTE_REQUEST,
  GET_GRUB_TASTE_SUCCESS,
  GET_GRUB_TASTE_FAILURE,
  SET_GRUB_TASTE_REQUEST,
  SET_GRUB_TASTE_SUCCESS,
  SET_GRUB_TASTE_FAILURE,
  CLEAR_GRUB_TASTE
} from '../reducers/grub'

import { AppDispatch } from '../store'
import { Swipable } from '../types'

export const getGrubTaste = () => {
  return async (dispatch: AppDispatch) => {
    return authRequestWithDispatch({
      dispatch,
      method: 'GET',
      endpoint: 'grub',
      data: {},
      types: [
        GET_GRUB_TASTE_REQUEST,
        GET_GRUB_TASTE_SUCCESS,
        GET_GRUB_TASTE_FAILURE
      ]
    })
  }
}

export const setGrubTaste = (grubTaste: Swipable[]) => {
  console.log('setGrubTaste')
  return async (dispatch: AppDispatch) => {
    return authRequestWithDispatch({
      dispatch,
      method: 'POST',
      endpoint: 'grub',
      data: {
        grubTaste
      },
      types: [
        SET_GRUB_TASTE_REQUEST,
        SET_GRUB_TASTE_SUCCESS,
        SET_GRUB_TASTE_FAILURE
      ]
    })
  }
}

export const clearGrubTaste = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: CLEAR_GRUB_TASTE })
    return authRequestWithDispatch({
      dispatch,
      method: 'DELETE',
      endpoint: 'grub',
      data: {},
      types: [
        SET_GRUB_TASTE_REQUEST,
        SET_GRUB_TASTE_SUCCESS,
        SET_GRUB_TASTE_FAILURE
      ]
    })
  }
}
