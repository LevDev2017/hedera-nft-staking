import { createReducer, createSlice } from '@reduxjs/toolkit'
import { updateNFTSerialNumbers } from './actions'

export const initialState = {
  serialNumbers: [],
  nfts: {},
}

export default createReducer(initialState, (builder) => {
  builder
  .addCase(updateNFTSerialNumbers, (state, { payload: { serialNumbers } }) => {
    state.serialNumbers = serialNumbers
  })
})