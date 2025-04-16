import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './user'
import groups from './groups'
import grub from './grub'

export const store = configureStore({
  reducer: {
    user
    // groups,
    // grub,
  }
})

export default combineReducers({
  user,
  groups,
  grub
})
