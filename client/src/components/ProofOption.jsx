import React, { useContext, useState } from 'react'

import zkicon from '../assets/argument (1).png'
import axios from 'axios'
import { createWalletClient, custom, parseEther } from 'viem'
import { filecoinCalibration } from 'viem/chains'
import { abi, ca_address } from '../contract/filVerified'
import { ZKproof } from './ZKproof'
import Loader from './Loader'
import lighthouse from '@lighthouse-web3/sdk'
import { Link } from 'react-router-dom'
import { MinaProof } from './MinaProof'

export const ProofOption = props => {
  const gitAcc = 190
  const bizData = 3
  const [Proof, setProof] = useState()
  const [loading, setLoading] = useState({ bool: false, text: '' })
  const [isProofGenerated, setIsProofGenerated] = useState(false)
  const [isDeployed, setIsDeployed] = useState(false)
  const [minaBool, setMinaBool] = useState(false)
  const apiKey = process.env.REACT_APP_API_KEY

  const getZkProof = async (git, biz) => {
    let headersList = {
      'Content-Type': 'application/json'
    }

    let bodyContent = JSON.stringify({
      gitAcc: git,
      bizData: biz
    })

    let reqOptions = {
      url: 'http://127.0.0.1:8000/proof',
      method: 'POST',
      headers: headersList,
      data: bodyContent
    }

    let response = await axios.request(reqOptions)
    console.log(response.data)
    return response.data
  }

  const walletClient = createWalletClient({
    chain: filecoinCalibration,
    transport: custom(window.ethereum)
  })

  const interactChain = async proof => {
    const [account] = await walletClient.getAddresses()
    console.log(Proof)
    await walletClient
      .writeContract({
        account,
        address: ca_address,
        abi: abi,
        functionName: 'getFilVerified',
        args: proof,
        value: parseEther('1')
      })
      .then(() => {
        setLoading(false)
        setIsProofGenerated(true)
      })
  }

  const handleClick = async () => {
    try {
      setLoading({ bool: true, text: 'Generating ZK Proof' })
      await getZkProof(gitAcc, bizData).then(async proof => {
        setLoading({
          bool: true,
          text: "Uploading Proof to IPFS for SP's reference"
        })
        const response = await lighthouse
          .uploadText(
            ` 
        
        ** Use bellow ZK proof as an input to verifyProof function in filVerification.sol contract **

        ZK-Proof Input ==>

        ${proof.toString()}
        
        `,
            apiKey
          )
          .then(async res => {
            console.log(res)
            var new_proof = [...proof, res.data.Hash, 'gaming']
            console.log(new_proof)
            setLoading({ bool: true, text: 'ZK Proof On chain interaction' })
            await interactChain(new_proof)
          })
      })
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  const handleMina = () => {
    setMinaBool(!minaBool)
  }
  // console.log(`props ${props.ga}`);

  return (
    <div class='w-[85vw] h-[80vh] bg-slate-800 border-2 z-10 items-center absolute left-1/8 text-slate-50 flex flex-col p-6 gap-6'>
      <button
        class='absolute top-4 right-4 font-bold'
        onClick={props.handlePopup}
      >
        X
      </button>
      {loading.bool ? (
        <Loader text={loading.text} />
      ) : isProofGenerated ? (
        <ZKproof />
      ) : minaBool ? (
        <MinaProof githubage_mina={props.ga} />
      ) : (
        <>
          <div class='font-bold text-3xl'>Generate ZK Proof using</div>
          <div class='flex flex-row w-70 h-70 justify-between gap-10'>
            <div class='bg-slate-700 w-full h-full p-10 flex flex-col items-center text-xl justify-between'>
              Using aeFILiate ZK Circuits
              <div class='max-w-md'>
                <img src={zkicon} />
              </div>
              <button
                class='w-64 border-2 border-slate-20 hover:bg-white hover:text-slate-900'
                onClick={handleClick}
              >
                {' '}
                Generate ZK Proof
              </button>
            </div>
            <div class='bg-slate-700 w-full h-full p-10 flex flex-col items-center text-xl justify-between'>
              Using Mina Protocol
              <div class='max-w-md'>
                <img src='minaLogo.png' class='invert' />
              </div>
              <button
                class='w-64 border-2 border-slate-20 hover:bg-white hover:text-slate-900'
                onClick={handleMina}
              >
                {' '}
                Generate ZK Proof
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
