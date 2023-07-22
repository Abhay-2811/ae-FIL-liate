import React, { useState } from 'react'

export const IdAuthPopUp = (props) => {
  const [idType, setIdType] = useState('')
  const [idFile, setIdFile] = useState(null)
  
  console.log(idType)
  console.log(idFile)

  const verifyID = (e) => {
    e.preventDefault()
    console.log('verifying')
    props.handleVerify(true)
    props.handleClose(true)
  }

  return (
    <div class="w-[50vw] h-[70vh] bg-slate-700 z-10 items-center absolute left-1/4 text-slate-50 flex flex-col p-4 gap-4">
        <div>Verify your ID</div>
        <button class="absolute top-4 right-4 font-bold" onClick={props.handleClose}>x</button>
        <form class="w-[40vw] h-[60vh] flex flex-col gap-4 items-center" onSubmit={verifyID}>
        {/* <input type="text" placeholder='Document Type'  class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/> */}
      <select class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      onChange={(e => setIdType(e.target.value))}>
        <option value="Passport"> Passport</option>
        <option value="DriverLicense"> Driver's License</option>
        <option value="PANcard">PAN Card</option>
      </select>
        <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-10
      file:border-0
      file:text-sm file:font-semibold
      file:bg-slate-50 file:text-slate-700
      hover:file:bg-violet-100"
      onChange={e => setIdFile(e.target.files[0])} />
      {/* <input type="submit" class="w-48 h-10 bg-slate-50 border-2 text-slate-900 font-bold hover:text-slate-50 hover:bg-slate-500" /> */}
      {/* onClick={props.handleClose} */}
      <button  class="w-48 h-10 bg-slate-50 border-2 text-slate-900 font-bold hover:text-slate-50 hover:bg-slate-500">Submit</button>
      </form>
    </div>
  )
}

