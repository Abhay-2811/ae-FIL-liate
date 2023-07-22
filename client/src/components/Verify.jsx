import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { IdAuth } from './IdAuth'
import { GithubAuth } from './GithubAuth'
import { BusinessVerify } from './BusinessVerify'
import { ProofOption } from './ProofOption'



export const Verify = () => {

  const [generateProofPopup, setGenerateProofPopup] = useState(false)
  const [isGithubVerified, setIsGithubVerified] = useState(false)
  const [isIdVerified, setIsIdVerified] = useState(false)
  const [isBusinessVerified, setIsBusinessVerified] = useState(false)

  const toggleZKPopup = () => {
    setGenerateProofPopup(!generateProofPopup)
  }
  console.log(generateProofPopup);
  console.log(`github : ${isGithubVerified}`);

  return (
    <div class="bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden font-mono ">
        <Navbar/>
        <div class=" w-screen h-full flex flex-col items-center">
            <div class="font-bold text-3xl">Verifyium FIL-eo-Sa</div>
            <div class="w-full h-full flex flex-row justify-between pl-32 pr-32 pt-12">
            <GithubAuth handleGithubAuth={setIsGithubVerified}/>
            <IdAuth/>
            <BusinessVerify/>
            </div>
            <button class="w-64 border-2 border-slate-100 hover:bg-white hover:text-slate-900 absolute bottom-12 text-2xl" onClick={toggleZKPopup}>Generate Proof</button>
            {generateProofPopup && <ProofOption handlePopup={toggleZKPopup}/>}
        </div>
    </div>
  )
}
