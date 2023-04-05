import { createAction } from '@reduxjs/toolkit'

export const updateAccountId = createAction('user/updateAccountId')
export const updateTopic = createAction('user/updateTopic')
export const updatePrivateKey = createAction('user/updatePrivateKey')
export const updatePairingString = createAction('user/updatePairingString')
export const updateWallet = createAction('user/updateWallet')
export const updateProvider = createAction('user/updateProvider')
export const updateSigner = createAction('user/updateSigner')