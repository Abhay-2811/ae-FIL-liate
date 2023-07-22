import React from 'react'
import { useState } from 'react'
import { BusinessVerifyPopUp } from './BusinessVerifyPopUp'
import businessimg from '../assets/business-and-trade.png'

export const BusinessVerify = () => {
  const [popUp, setPopUp] = useState(false)
  const [isVerifiedBusiness, setIsVerifiedBusiness] = useState(false)

  const togglePopup = () => {
    setPopUp(!popUp);
  }

  console.log(popUp)
  console.log(`is verified Business : ${isVerifiedBusiness}`)
  
  return (
    <div class="flex flex-col justify-center items-center w-80 h-96 border-2 hover:bg-sky-500 gap-8 p-12">
      <div class="font-bold text-xl">Business Verification</div>
      <div class="flex flex-col justify-between">
      <img src={businessimg}/>
      </div>
      <input class="w-48 border-2 border-slate-20 hover:bg-white hover:text-slate-900"
      type="button"
      value="Verify Business"
      onClick={togglePopup}
      />
      {/* <button class="w-48 border-2 border-slate-900 hover:bg-white">Verify ID</button> */}
      {popUp && <BusinessVerifyPopUp handleClose={togglePopup} handleVerifyBusiness={setIsVerifiedBusiness}/>}
      
    </div>

  )
}
