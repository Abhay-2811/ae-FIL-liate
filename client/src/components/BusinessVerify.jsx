import React from 'react'
import { useState } from 'react'
import { BusinessVerifyPopUp } from './BusinessVerifyPopUp'

export const BusinessVerify = () => {
  const [popUp, setPopUp] = useState(false)

  const togglePopup = () => {
    setPopUp(!popUp);
  }

  console.log(popUp)
  return (
    <div class="flex flex-col justify-center items-center w-80 h-96 border-2 hover:bg-sky-500 hover:text-slate-900">
      <div class="flex">
      Business Verification
      </div>
      <input class="w-48 border-2 border-slate-900 hover:bg-white"
      type="button"
      value="Verify Business"
      onClick={togglePopup}
      />
      {/* <button class="w-48 border-2 border-slate-900 hover:bg-white">Verify ID</button> */}
      {popUp && <BusinessVerifyPopUp handleClose={togglePopup}/>}
    </div>
  )
}