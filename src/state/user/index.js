import { createReducer, createSlice } from '@reduxjs/toolkit'
import { updateAccountId, updateTopic, updatePrivateKey, updatePairingString, updateWallet, updateProvider, updateSigner } from './actions'

export const initialState = {
  accountId: '',
  topic: '',
  privateKey: '',
  pairingString: '',
  wallet: {},
  provider: {},
  signer: {},
}

export default createReducer(initialState, (builder) => {
  builder
  .addCase(updateAccountId, (state, { payload: { accountId } }) => {
    state.accountId = accountId
  })
  .addCase(updateTopic, (state, { payload: { topic } }) => {
    state.topic = topic
  })
  .addCase(updatePrivateKey, (state, { payload: { privateKey } }) => {
    state.privateKey = privateKey
  })
  .addCase(updatePairingString, (state, { payload: { pairingString } }) => {
    state.pairingString = pairingString
  })
  .addCase(updateWallet, (state, { payload: { wallet } }) => {
    state.wallet = wallet
  })
  .addCase(updateProvider, (state, { payload: { provider } }) => {
    state.provider = provider
  })
  .addCase(updateSigner, (state, { payload: { signer } }) => {
    state.signer = signer
  })
})