import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './user'
import groups from './groups'

export const store = configureStore({
  reducer: {
    user,
    // groups
  }
})

export default combineReducers({
  user,
  groups
})
