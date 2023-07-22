import React, { useState,useEffect } from 'react'
import axios from 'axios'

export const BusinessVerifyPopUp = (props) => {

  const [registrationNum, setRegistrationNum] = useState('')
  const [businessFile, setBusinessFile] = useState(null)
  const [businessDomain, setBusinessDomain] = useState('')
  const [businessCheck, setBusinessCheck] = useState(false)
  const [businessName, setBusinessName] = useState('')

  console.log(registrationNum)
  console.log(businessFile)

  useEffect(()=> {
    setBusinessName("Patel Financial Services")
  })
 

  const verifyBusiness = (e) => {
    e.preventDefault()
    console.log('verifying')
    props.handleVerifyBusiness(true)
    props.handleClose()
  }

  const toggleBusinessCheck = () => {
    setBusinessCheck(!businessCheck)
  }

  const BusinessVerification = async () => {
    toggleBusinessCheck()
    let config = {
      method: 'post',
      url: `https://fine-rose-pronghorn-gear.cyclic.app/verifyBusiness`,
      headers: {
        "Content-Type": "application/json"
       },
       body:{
        "name" : "Olivia Patel",
        "businessName" : "Patel Financial Services"
       }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      
    })
    .catch((error) => {
      console.log(error);
    });
  
  }

  return (
    <div class="w-[50vw] h-[70vh] bg-slate-700 z-10 items-center absolute left-1/4 text-slate-50 flex flex-col p-4 gap-8">
    <div>Business Verification</div>
    <button class="absolute top-4 right-4 font-bold" onClick={props.handleClose}>x</button>
    <form class="w-[40vw] h-[60vh] flex flex-col gap-8 items-center" onSubmit={verifyBusiness}>
    <input type="text" placeholder='GST Number'  class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  onChange={(e => setRegistrationNum(e.target.value))}/>
  <input type="text" placeholder='Business Domain'  class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  onChange={(e => setBusinessDomain(e.target.value))}/>
  <div class="w-full flex flex-col gap-4">
    <label>Business Registration Document:</label>
    <input type="file" class="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-10
  file:border-0
  file:text-sm file:font-semibold
  file:bg-slate-50 file:text-slate-700
  hover:file:bg-violet-100" 
  onChange={e => setBusinessFile(e.target.files[0])}/>
  </div>
  {businessCheck ? (
    <div class="w-full flex  flex-col items-center">
    <div class="flex flex-row items-center justify-center gap-8 ">
    <div class="max-w-m ">
    <img src='checked.png'/>
    </div>
    <div class="flex flex-col">
    <p>Name : Olivia Patel</p>
    <div >{businessName}</div>
    <div >{businessDomain}</div>
    <div>{registrationNum}</div>
    </div>
    {/* <p> Id Number : {idNum} </p> */}
    
  </div>
  <button class="w-48 h-10 bg-slate-50 border-2 text-slate-900 font-bold hover:text-slate-50 hover:bg-slate-500 mt-4" onClick={verifyBusiness}>
    Next
  </button>
  </div>
  ) : (
  <button  class="w-48 h-10 bg-slate-50 border-2 text-slate-900 font-bold hover:text-slate-50 hover:bg-slate-500" onClick={BusinessVerification}>
        Submit
      </button>  )}
  </form>
</div>
  )
}
