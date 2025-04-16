import { useDispatch, useSelector } from 'react-redux'
import { store } from '../reducers'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const UseAppSelector = useSelector.withTypes<RootState>()
export const UseAppDispatch = useDispatch.withTypes<AppDispatch>()
