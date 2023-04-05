import React, { useEffect } from 'react'
import styled from 'styled-components'
import walletConnect from 'utils/walletConnect'
import { 
  useUserAccountManager, 
  useUserTopicManager, 
  useUserPrivateKeyManager, 
  useUserPairingStringManager, 
  useUserWalletManager,
  useUserProviderManager,
  useUserSignerManager,
} from 'state/user/hooks'

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const LogoImage = styled.img`
  width: 70px;
  border-radius: 15px;
`

const ConnectButton = styled.button`
  background: transparent;
  font-size: 20px;
  padding: 8px 16px;
  border: 3px solid #ffffff;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
`

const Header = () => {
  const [account, setAccount] = useUserAccountManager()
  const [topic, setTopic] = useUserTopicManager()
  const [pivateKey, setPrivateKey] = useUserPrivateKeyManager()
  const [pairingString, setPairingString] = useUserPairingStringManager()
  const [wallet, setWallet] = useUserWalletManager()
  const [provider, setProvider] = useUserProviderManager()
  const [signer, setSigner] = useUserSignerManager()

  const handleConnectWallet = async () => {
    const walletData = await walletConnect()
    if (walletData) {
      walletData[0].pairingEvent.once((pairingData) => {
        pairingData.accountIds.forEach((id) => {
          setAccount(id)
        })
      })
      setTopic(walletData[1].topic)
      setPrivateKey(walletData[1].privateKey)
      setPairingString(walletData[1].pairingString)
      setWallet(walletData[0])
    }
  }

  useEffect(() => {    
    if (account && topic && wallet) {
      const provider = wallet.getProvider("mainnet", topic, account);
      const signer = wallet.getSigner(provider);
      setProvider(provider)
      setSigner(signer)
      console.log("pooh, signer = ", signer)
    }
  }, [account, topic, wallet])

  return (
    <StyledHeader>
      <LogoImage src="images/logo.png" alt="logo" />
      <ConnectButton onClick={handleConnectWallet}>{account ? `Connected (${account})` : 'Connect Wallet'}</ConnectButton>
    </StyledHeader>
  )
}

export default Header
