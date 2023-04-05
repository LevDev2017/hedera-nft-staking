import { MIRROR_NODE_API, DEADPOT_TOKEN_ID } from 'config'
import { useUserAccountManager } from 'state/user/hooks'

export const getTokensEndpoint = (account) => {
  return `${MIRROR_NODE_API}api/v1/tokens?account.id=${account}`
}

export const getNFTsEndpoint = (account, tokenId) => {
  return `${MIRROR_NODE_API}api/v1/tokens/${tokenId}/nfts?account.id=${account}`
}

export const getNFTsInfo = (serialNumber) => {
  return `${MIRROR_NODE_API}api/v1/tokens/${DEADPOT_TOKEN_ID}/nfts/${serialNumber}`
}

export const getNFTsData = (tokenId, account) => {
  return `${MIRROR_NODE_API}api/v1/tokens/${tokenId}/nfts?account.id=${account}`
}