import React from 'react'
import { Navbar } from './Navbar'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { filecoinCalibration } from 'viem/chains'
import { abi, ca_address } from '../contract/filVerified'
import { useAccount } from 'wagmi'

export const MinaProof = props => {
  const { address } = useAccount()
  const chainInteraction = async () => {
    console.log(address)
    const client = createWalletClient({
      chain: filecoinCalibration,
      transport: http()
    })

    const pk = process.env.REACT_APP_PRIVATE_KEY
    const account = privateKeyToAccount(`${pk}`)
    await client.writeContract({
      account,
      address: ca_address,
      abi: abi,
      functionName: 'verifiedThruMina',
      args: [address, 'gaming'],
      value: parseEther('1')
    })
  }

  const [progress, setProgress] = useState(0)
  const [git, setGit] = useState(0)
  const [biz, setBiz] = useState(0)
  // state 0 => nothing started yet
  // state 1 => owner completed changing unconfirmed proof and waiting for user to update state from his side

  if (progress === 0) {
    const handleClick = async () => {
      try {
        let headersList = {
          'Content-Type': 'application/json'
        }
        let bodyContent = JSON.stringify({
          key: process.env.REACT_APP_ADMIN_KEY,
          git: props.githubage_mina,
          biz: 6
        })

        let reqOptions = {
          url: 'http://127.0.0.1:4050/updateOnlyOwner/',
          method: 'POST',
          headers: headersList,
          data: bodyContent
        }

        let response = await axios.request(reqOptions)
        console.log(response.data)
        setProgress(1)
      } catch (error) {
        alert(error)
      }
    }
    return (
      <div class='bg-slate-800 w-[80vw] h-[80vh] text-slate-50 overflow-hidden flex flex-col justify-evenly items-center text-2xl font-mono'>
        Use Mina Protocol to generate ZK Proofs {props.githubage_mina}
        <button
          class='w-64 h-20 border-2 border-slate-100 hover:bg-white hover:text-slate-900 text-2xl'
          onClick={handleClick}
        >
          Begin Proof
        </button>
      </div>
    )
  } else if (progress === 1) {
    const handleClick = async () => {
      try {
        console.log(git, biz)
        let headersList = {
          'Content-Type': 'application/json'
        }

        let bodyContent = JSON.stringify({
          git: git,
          biz: biz
        })

        let reqOptions = {
          url: 'http://127.0.0.1:4050/userUpdateMainState/',
          method: 'POST',
          headers: headersList,
          data: bodyContent
        }

        let response = await axios.request(reqOptions)

        if (response.status === 200) {
          await chainInteraction()
        } else {
          alert("Invalid data and the proof wasn't verified try again !!!")
        }
      } catch (error) {
        alert(error)
      }
    }
    return (
      <div class='bg-slate-800 w-[80vw] h-[80vh] text-slate-50 pt-12 overflow-hidden flex flex-col gap-4 items-start text-l font-mono'>
        Admin Updated the stste Now it's your turn !
        <label htmlFor='git'>How old is your github account (In days) ?</label>
        <input class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          type='number'
          id='git'
          onChange={e => {
            e.preventDefault()
            setGit(e.target.value)
          }}
        />
        <label htmlFor='biz'>
          How old is your business from registration as mentioned in document
          submitted (In months) ?
        </label>
        <input class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          type='number'
          id='biz'
          onChange={e => {
            e.preventDefault()
            setBiz(e.target.value)
          }}
        />
        <p>
          Note State is already created using uploaded docs so be precise or the
          proof will fail....
        </p>
        <button class="w-64 h-10 border-2 border-slate-100 hover:bg-white hover:text-slate-900 mt-20 text-xl" onClick={handleClick}>Submit</button>
      </div>
    )
  }
}
