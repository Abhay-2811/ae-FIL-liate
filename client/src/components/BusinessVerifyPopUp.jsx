import React, { useState } from 'react'

export const BusinessVerifyPopUp = (props) => {

  const [registrationNum, setRegistrationNum] = useState('')
  const [businessFile, setBusinessFile] = useState(null)

  console.log(registrationNum)
  console.log(businessFile)

  const verifyBusiness = (e) => {
    e.preventDefault()
    console.log('verifying')
    props.handleVerifyBusiness(true)
    props.handleClose(true)
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
  <div class="w-full flex flex-col gap-4">
    <label>Business Registration Document:</label>
    <input type="file" class="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-10
  file:border-0
  file:text-sm file:font-semibold
  file:bg-slate-50 file:text-slate-700
  hover:file:bg-violet-100" 
  onChange={e => setBusinessFile(e.target.files[0])}/>
  </div>
  <input type="submit" class="w-48 h-10 bg-slate-50 border-2 text-slate-900 font-bold hover:text-slate-50 hover:bg-slate-500"/>
  </form>
</div>
  )
}
