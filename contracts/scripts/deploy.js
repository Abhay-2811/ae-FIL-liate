const hre = require('hardhat')

async function main () {
  const private_key = network.config.accounts[0]
  const wallet = new hre.ethers.Wallet(private_key, ethers.provider)

  const verifier = await hre.ethers.deployContract('Verifier',{from: wallet.address})

  await verifier.waitForDeployment()

  console.log(`Verifier contract deployed to ${verifier.target}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
