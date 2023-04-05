import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Client, TokenNftInfoQuery } from '@hashgraph/sdk'
import { useUserAccountManager, useUserPrivateKeyManager, useUserProviderManager, useUserSignerManager } from 'state/user/hooks'
import { useNFTSerialNumbersManager } from 'state/nfts/hooks'
import { getNFTsEndpoint } from 'utils/getEndpoints'
import { DEADPOT_TOKEN_ID } from 'config'
import ClaimButton from './ActionButtons/ClaimButton'
import StakeAllButton from './ActionButtons/StakeAllButton'
import StakeButton from './ActionButtons/StakeButton'
import UnstakeAllButton from './ActionButtons/UnstakeAllButton'
import UnstakeButton from './ActionButtons/UnstakeButton'
import GetNFTInfo from '../../../utils/getNFTInfo'
import { useState } from 'react'
import './ActionContainer.css';

const StyledContainer = styled.div`
  color: white;
  width: 48%;
  min-height: 240px;
  margin-top: 20px;
  border: 4px solid;
  border-radius: 16px;
  box-shadow: 0 6px 20px #ffffff;
`

const StyledActionsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #00000070;
  padding: 10px 0px;
  border-radius: 16px;
`

const StyledNFTArea = styled.div`
  min-height: 500px;
  margin-top:20px;
  display: flex;
  input[type="checkbox"][id^="stakeCheck"] {
    display: none;
  }
`

const ActionContainer = ({...props}) => {
  const type = props.type
  const [nftMetadata, setNftMetadata] = useState([])
  const [account, setAccount] = useUserAccountManager()
  const [privateKey, setPrivateKey] = useUserPrivateKeyManager()
  const [provider, setProvider] = useUserProviderManager()
  const [serialNumbers, setSerialNumbers] = useNFTSerialNumbersManager()
  const [signer, setSigner] = useUserSignerManager()

  useEffect(() => {
    const getNFTs = (endpoint) => {
      axios.get(endpoint)
      .then(res => {
        const result = res.data
        setSerialNumbers(result.nfts.map((nft) => nft.serial_number))
      })
    }

    if (account && type === "stake") {
      getNFTs(getNFTsEndpoint(account, DEADPOT_TOKEN_ID))
    }

  }, [account, type])

  useEffect(() => {
    async function f() {
      const nftMetadata = await GetNFTInfo("0.0.968621")
      setNftMetadata(nftMetadata)
    }
    f()
    // const nftInfos = async() => {
    //   console.log("pooh, nftInfos signer = ", signer)
    //   const contractExecTx = await new TokenNftInfoQuery()
    //     .byNftId('0.0.914500')
    //     .freezeWithSigner(signer)
    //   const contractExecSign = await contractExecTx.signWithSigner(signer);
    //   const contractExecSubmit = await contractExecSign.executeWithSigner(signer);
    //   const contractExecRx = await provider.getTransactionReceipt(contractExecSubmit.transactionId);
    //   console.log("pooh, nftInfos contractExecRx = ", contractExecRx)
    // }

    // if (account && privateKey && provider) {
    //   nftInfos()
    // } 
  }, [])

  // useEffect(() => {
  //   nftMetadata.map((item) => {
  //     <img src={item} />
  //   })
  //   console.log("+++++", nftMetadata)
  // }, [nftMetadata])

  return (
    <StyledContainer>
      <StyledNFTArea>
        { type === "stake" && nftMetadata.map((item, key) => 
          <ul>
            <li>
              <input type="checkbox" id={"stakeCheck" + key} />
              <label for={"stakeCheck" + key}><img src={item} alt="myNFT"/></label>
            </li>
          </ul>
        )}
      </StyledNFTArea>
      { type === "stake" ? 
        <StyledActionsArea>
          <StakeButton />
          <StakeAllButton />
        </StyledActionsArea>
        :
        <StyledActionsArea>
          <UnstakeButton />
          <UnstakeAllButton />
          <ClaimButton />
        </StyledActionsArea>
      }
    </StyledContainer>
  );
}

export default ActionContainer;
