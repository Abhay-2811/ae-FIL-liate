import React, { useEffect, useState } from 'react'

 const users = 
 [
    {
      "name": "John Doe",
      "passport_number": "ABC123456",
      "driver_license_number": "DL123456",
      "pan_number": "ABCDE1234F",
      "govt_id_number": "GOV12345"
    },
    {
      "name": "Jane Smith",
      "passport_number": "XYZ789012",
      "driver_license_number": "DL789012",
      "pan_number": "FGHIJ5678K",
      "govt_id_number": "GOV67890"
    },
    {
      "name": "Michael Johnson",
      "passport_number": "LMN345678",
      "driver_license_number": "DL345678",
      "pan_number": "PQRST1234L",
      "govt_id_number": "GOV23456"
    },
    {
      "name": "Emily Williams",
      "passport_number": "UVW901234",
      "driver_license_number": "DL901234",
      "pan_number": "UVWXY5678M",
      "govt_id_number": "GOV78901"
    },
    {
      "name": "Daniel Lee",
      "passport_number": "OPQ567890",
      "driver_license_number": "DL567890",
      "pan_number": "ZABCD1234N",
      "govt_id_number": "GOV56789"
    },
    {
      "name": "Sarah Kim",
      "passport_number": "EFG123456",
      "driver_license_number": "DL123456",
      "pan_number": "EFGHI5678O",
      "govt_id_number": "GOV12345"
    },
    {
      "name": "William Chen",
      "passport_number": "HIJ789012",
      "driver_license_number": "DL789012",
      "pan_number": "JKLMN5678P",
      "govt_id_number": "GOV67890"
    },
    {
      "name": "Olivia Patel",
      "passport_number": "QRS345678",
      "driver_license_number": "DL345678",
      "pan_number": "QRSTU1234Q",
      "govt_id_number": "GOV23456"
    },
    {
      "name": "James Gupta",
      "passport_number": "VWX901234",
      "driver_license_number": "DL901234",
      "pan_number": "VWXYZ5678R",
      "govt_id_number": "GOV78901"
    },
    {
      "name": "Sophia Rao",
      "passport_number": "YZA567890",
      "driver_license_number": "DL567890",
      "pan_number": "BCDE1234S",
      "govt_id_number": "GOV56789"
    }
  ]



export const IdAuthPopUp = (props) => {
  const [idType, setIdType] = useState('')
  const [idFile, setIdFile] = useState(null)
  const [idCheck, setIdCheck] = useState(false)
  const [userName, setUserName] = useState('')
  const [idNum, setIdNum] = useState('')
  // console.log(users[Math.floor(Math.random() * 10)]);
  console.log(idType)
  console.log(idFile)
  console.log(`id check: ${idCheck}`);

  const verifyID = (e) => {
    e.preventDefault()
    console.log('verifying')
    props.handleVerify(true)
    props.handleClose()
  }

  const toggleIdCheck = () => {
    setIdCheck(!idCheck)
  }

  const userData = (idFile) => {
    const rn = Math.floor(Math.random() * 10)
    setUserName(users[rn])
    setIdNum(users[rn].idFile)
    console.log(userName);
    console.log(idNum);
  }

  

  return (
    <div class="w-[50vw] h-[70vh] bg-slate-700 z-10 items-center absolute left-1/4 text-slate-50 flex flex-col p-4 gap-4">
        <div>Verify your ID</div>
        <button class="absolute top-4 right-4 font-bold" onClick={props.handleClose}>x</button>
        <form class="w-[40vw] h-[60vh] flex flex-col gap-4 items-center" onSubmit={verifyID}>
      <select class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 text-slate-900 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      onChange={(e => setIdType(e.target.value))}>
        <option value="govt_id_number">Government ID</option>
        <option value="passport_number"> Passport</option>
        <option value="driver_license_number"> Driver's License</option>
        <option value="pan_number">PAN Card</option>
      </select>
        <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-10
      file:border-0
      file:text-sm file:font-semibold
      file:bg-slate-50 file:text-slate-700
      hover:file:bg-violet-100"
      onChange={e => {setIdFile(e.target.files[0])}} />
      {/* <input type="submit" class="w-48 h-10 bg-slate-50 border-2 text-slate-900 font-bold hover:text-slate-50 hover:bg-slate-500" /> */}
      {/* onClick={props.handleClose} */}
      {idCheck ? 
      <div class="flex flex-col items-center mt-12 gap-2 ">
        <div class="max-w-m ">
        <img src='checked.png'/>
        </div>
        <p class="mt-4">DocType : {idType}</p>
        <p >Name : John Cena</p>
        <button  class="w-48 h-10 bg-slate-50 border-2 text-slate-900 font-bold hover:text-slate-50 hover:bg-slate-500 mt-4" onClick={verifyID}>
        Next
      </button>
      </div>
      :<button  class="w-48 h-10 bg-slate-50 border-2 text-slate-900 font-bold hover:text-slate-50 hover:bg-slate-500" onClick={toggleIdCheck}>
        Submit
      </button>}
      
      </form>
    </div>
  )
}

