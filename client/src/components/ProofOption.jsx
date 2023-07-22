import React, { useState } from 'react'
import { Rings } from '@agney/react-loading'

import zkicon from '../assets/argument (1).png'
import axios from 'axios'
import { createWalletClient, custom, parseEther } from 'viem'
import { filecoinCalibration } from 'viem/chains'
import { abi, address } from '../contract/filVerified'

export const ProofOption = props => {

  const gitAcc = 190
  const bizData = 3
  const [Proof, setProof] = useState()

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
    console.log((response.data));

    return response.data
  }

  const walletClient = createWalletClient({
    chain: filecoinCalibration,
    transport: custom(window.ethereum)
  })

  const interactChain = async (proof) => {
    const [account] = await walletClient.getAddresses()
    console.log(Proof);
    await walletClient.writeContract({
      account,
      address: address,
      abi: abi,
      functionName: 'getFilVerified',
      args:proof,
      value: parseEther('1')
    });

  }

  const handleClick = async () => {
    try {
      await getZkProof(gitAcc, bizData).then(async (proof)=>{
        await interactChain(proof);
      });

    } catch (error) {
      console.log(error);
      alert(error)
    }
    
  }

  return (
    <div class='w-[85vw] h-[79vh] bg-slate-800 border-2 z-10 items-center absolute left-1/8 text-slate-50 flex flex-col p-6 gap-6'>
    {loading ? 
    ( <Rings style={{"max-width":"40vw"}} /> ) 
    : (
        isProofGenerated ? (
            <div>
                Proof Generated
            </div>
        ) : (<>
            <div class='font-bold text-3xl'>Generate ZK Proof using</div>
      <button
        class='absolute top-4 right-4 font-bold'
        onClick={props.handlePopup}
      >
        X
      </button>
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
            <img src='minaLogo.png' />
          </div>
          <button class='w-64 border-2 border-slate-20 hover:bg-white hover:text-slate-900'>
            {' '}
            Generate ZK Proof
          </button>
        </div>
      </div>
      </>
        ) 
    ) }
      
    </div>
  )
}
