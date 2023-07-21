require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.17'
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
      details: { yul: false }
    }
  },
  defaultNetwork: 'calibrationnet',
  networks: {
    calibrationnet: {
      chainId: 314159,
      url: 'https://api.calibration.node.glif.io/rpc/v1',
      accounts: [PRIVATE_KEY]
    }
  }
}
