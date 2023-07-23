import React, { createContext, useState } from 'react'
import { Navbar } from './Navbar'
import { IdAuth } from './IdAuth'
import { GithubAuth } from './GithubAuth'
import { BusinessVerify } from './BusinessVerify'
import { ProofOption } from './ProofOption'

export const Verify = () => {

  const [generateProofPopup, setGenerateProofPopup] = useState(false)
  const [isGithubVerified_s1, setIsGithubVerified_s1] = useState(false)
  const [isIdVerified_s2, setIsIdVerified_s2] = useState(false)
  const [isBusinessVerified_s3, setIsBusinessVerified_s3] = useState(false)
  const [gAge, setgAge] = useState(0)

  const GitContext = createContext()

  const setGitHubAge = (age) => {
    setgAge(age)
  }


  const toggleZKPopup = () => {
    setGenerateProofPopup(!generateProofPopup)
  }
  console.log(generateProofPopup);
  console.log(`github : ${isGithubVerified_s1}`);
  console.log(`idAuth: ${isIdVerified_s2}`);
  console.log(`businessAuth: ${isBusinessVerified_s3}`);

  return (
    
    <div class="bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden font-mono ">
        <Navbar/>
        <div class=" w-screen h-full flex flex-col items-center">
            <div class="font-bold text-3xl">Verifyium FIL-eo-Sa</div>
            <div class="w-full h-full flex flex-row justify-between pl-32 pr-32 pt-12">
            <GithubAuth handleGithubAuth={setIsGithubVerified_s1} gitHubAge={setGitHubAge}/>
            <IdAuth handleIdAuth={setIsIdVerified_s2}/>
            <BusinessVerify handleBusinessAuth={setIsBusinessVerified_s3}/>
            </div>
            {(isGithubVerified_s1 && isIdVerified_s2 && isBusinessVerified_s3) ? 
            (<button class="w-64 border-2 border-slate-100 hover:bg-white hover:text-slate-900 absolute bottom-12 text-2xl" onClick={toggleZKPopup}>Generate Proof</button>)
            :(<button class="w-64 disabled:opacity-25 block border-2 border-slate-100 absolute bottom-12 text-2xl">Generate Proof</button>)
            }
            
            {generateProofPopup && <ProofOption handlePopup={toggleZKPopup} ga={gAge}/>}
           
        </div>
    </div>
  )
}
