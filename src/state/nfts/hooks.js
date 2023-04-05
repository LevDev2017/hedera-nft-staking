import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNFTSerialNumbers } from './actions'

export function useNFTSerialNumbersManager() {
  const dispatch = useDispatch()
  const serialNumbers = useSelector((state) => state.nfts.serialNumbers)

  const setSerialNumbers = useCallback((_serialNumbers) => {
    dispatch(updateNFTSerialNumbers({ serialNumbers: _serialNumbers }))
  }, [dispatch])

  return [serialNumbers, setSerialNumbers]
}
