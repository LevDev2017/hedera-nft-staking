import React, { useEffect } from 'react'
import axios from 'axios'
import { getTokensEndpoint, getNFTsEndpoint } from 'utils/getEndpoints'
import { getIpfsLinks } from 'utils/getIpfslinks'

const GetNFTInfo = async (account) => {
  var metadatas = [];

  let apiData = await axios(getTokensEndpoint(account))
  apiData = apiData.data
  
  let tokenIds = [];
  apiData.tokens.map((item) => item.type === "NON_FUNGIBLE_UNIQUE" && tokenIds.push(item.token_id))

  let nfts = [];
  for(var i = 0; i < tokenIds.length; i++) {
    const nft = (await axios(getNFTsEndpoint(account, tokenIds[i]))).data.nfts
    nfts.push( nft )
  }
  nfts[1].map((item) => { metadatas.push(atob(item.metadata)) })

  let nftlinks = [];
  if(metadatas.length > 0) {
    for(var i = 0; i < metadatas.length; i++) {
      const data = await axios(getIpfsLinks(metadatas[i]))
      nftlinks.push(getIpfsLinks(data?.data.image))
    }
  }
  
  return nftlinks;
  
  /* 
  let us try
  const getNFTMetadata = async() => {
    let apiData;
    await axios(getTokensEndpoint(account))
      .then(function(response) {
        apiData = response.data;
    })
    
    let tokenIds = [];
    apiData.tokens.map((item) => item.type === "NON_FUNGIBLE_UNIQUE" && tokenIds.push(item.token_id))

    let nfts = [];
    for(var i = 0; i < tokenIds.length; i++) {
      await axios(getNFTsEndpoint(account, tokenIds[i]))
        .then(function(response) {
          nfts.push(response.data.nfts);
      })
    }
    nfts[1].map((item) => { metadatas.push(atob(item.metadata)) })
  }
  getNFTMetadata();
  return metadatas;
  */
}

export default GetNFTInfo;

