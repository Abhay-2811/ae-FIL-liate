import React from 'react'
import { useState } from 'react'
import { IdAuthPopUp } from './IdAuthPopUp'
import idlogo from "../assets/id-card1.png"

export const IdAuth = (props) => {
  const [popUp, setPopUp] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const togglePopup = () => {
    setPopUp(!popUp);
  }

  console.log(popUp)
  console.log(`is verified ID : ${isVerified}`)

  if(isVerified){
    props.handleIdAuth(true)
  }

  return (
    <div class="flex flex-col justify-center items-center w-80 h-96 border-2 hover:bg-sky-500 gap-12 p-12">
      <div class="font-bold text-xl">ID Verification</div>
      <div class="flex flex-col justify-between">
        <img src={idlogo} />
      </div>
      {isVerified ? (
        <div class="w-48 bg-green-600 flex justify-center items-center">
        verified
        </div>
      ) : (
        <input class="w-48 border-2 border-slate-20 hover:bg-white hover:text-slate-900"
        type="button"
        value="Verify ID"
        onClick={togglePopup}
        />
      ) }
      {/* {isVerified? (<div class="w-48 bg-green-600 flex justify-center items-center">verified</div>):(<></>)} */}
      {/* <button class="w-48 border-2 border-slate-900 hover:bg-white">Verify ID</button> */}
      {popUp && <IdAuthPopUp handleClose={togglePopup} handleVerify={setIsVerified}/>}
    </div>
  )
}
