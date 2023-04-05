import { HashConnect } from "hashconnect"

const walletConnect = async() => {

  let saveData = {
    topic: "",
    pairingString: "",
    privateKey: "",
  }
  let appMetadata = {
    name: "DeadPoet Staking App",
    description: "NFT Staking with DeapPoet",
    icon: "https://raw.githubusercontent.com/ed-marquez/hedera-dapp-days/testing/src/assets/hederaLogo.png",
  }
  let hashconnect = new HashConnect()

  // First init and store the pairing private key for later (this is NOT your account private key)
  const initData = await hashconnect.init(appMetadata)
  saveData.privateKey = initData.privKey

  // Then connect, storing the new topic for later
  const state = await hashconnect.connect()
  saveData.topic = state.topic

  // Generate a pairing string, which you can display and generate a QR code from
  saveData.pairingString = hashconnect.generatePairingString(state, "mainnet", false)

  // Find any supported local wallets
  hashconnect.findLocalWallets()
  hashconnect.connectToLocalWallet(saveData.pairingString)

  return [hashconnect, saveData]
}

export default walletConnect
