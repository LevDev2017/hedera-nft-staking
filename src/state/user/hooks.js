import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccountId, updateTopic, updatePrivateKey, updatePairingString, updateWallet, updateProvider, updateSigner } from './actions'

export function useUserAccountManager() {
  const dispatch = useDispatch()
  const account = useSelector((state) => state.user.accountId)

  const setAccount = useCallback((_accountId) => {
    dispatch(updateAccountId({ accountId: _accountId }))
  }, [dispatch])

  return [account, setAccount]
}

export function useUserTopicManager() {
  const dispatch = useDispatch()
  const topic = useSelector((state) => state.user.topic)

  const setTopic = useCallback((_topic) => {
    dispatch(updateTopic({ topic: _topic }))
  }, [dispatch])

  return [topic, setTopic]
}

export function useUserPrivateKeyManager() {
  const dispatch = useDispatch()
  const privateKey = useSelector((state) => state.user.privateKey)

  const setPrivateKey = useCallback((_privateKey) => {
    dispatch(updatePrivateKey({ privateKey: _privateKey }))
  }, [dispatch])

  return [privateKey, setPrivateKey]
}

export function useUserPairingStringManager() {
  const dispatch = useDispatch()
  const pairingString = useSelector((state) => state.user.pairingString)

  const setPairingString = useCallback((_pairingString) => {
    dispatch(updatePairingString({ pairingString: _pairingString }))
  }, [dispatch])

  return [pairingString, setPairingString]
}

export function useUserWalletManager() {
  const dispatch = useDispatch()
  const wallet = useSelector((state) => state.user.wallet)

  const setWallet = useCallback((_wallet) => {
    dispatch(updateWallet({ wallet: _wallet }))
  }, [dispatch])

  return [wallet, setWallet]
}

export function useUserProviderManager() {
  const dispatch = useDispatch()
  const provider = useSelector((state) => state.user.provider)

  const setProvider = useCallback((_provider) => {
    dispatch(updateProvider({ provider: _provider }))
  }, [dispatch])

  return [provider, setProvider]
}

export function useUserSignerManager() {
  const dispatch = useDispatch()
  const signer = useSelector((state) => state.user.signer)

  const setSigner = useCallback((_signer) => {
    dispatch(updateSigner({ signer: _signer }))
  }, [dispatch])

  return [signer, setSigner]
}