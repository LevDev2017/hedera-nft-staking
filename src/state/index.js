import { configureStore } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { useDispatch } from 'react-redux'
import { updateVersion } from './global/actions'
import user, { initialState as userInitialState } from './user'
import nfts from './nfts'

const PERSISTED_KEYS: string[] = ['user']

const store = configureStore({
  reducer: {
    user,
    nfts
  },
  preloadedState: load({
    states: PERSISTED_KEYS,
  })
})

store.dispatch(updateVersion())

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export default store