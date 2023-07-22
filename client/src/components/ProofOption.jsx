import React from 'react'
import minalogo from '../assets/Mina-MINA.png'
import zkicon from '../assets/argument (1).png'
import { Link } from 'react-router-dom'

export const ProofOption = (props) => {
  return (
    <div class="w-[85vw] h-[79vh] bg-slate-800 border-2 z-10 items-center absolute left-1/8 text-slate-50 flex flex-col p-6 gap-6">
        <div class="font-bold text-3xl">Generate ZK Proof using</div> 
        <button class="absolute top-4 right-4 font-bold" onClick={props.handlePopup}>X</button>
        <div class="flex flex-row w-70 h-70 justify-between gap-10">
            <div class="bg-slate-700 w-full h-full p-10 flex flex-col items-center text-xl justify-between">
                Using aeFILiate ZK Circuits
                <div class="max-w-md"><img src={zkicon} /></div>
                <Link to="/zkproof">
                <button class="w-64 border-2 border-slate-20 hover:bg-white hover:text-slate-900"> Generate ZK Proof</button>
                </Link>
            </div>
            <div class="bg-slate-700 w-full h-full p-10 flex flex-col items-center text-xl justify-between">
                Using Mina Protocol
                <div class="max-w-md"><img src={minalogo} /></div>
                <Link to="/mina">
                <button class="w-64 border-2 border-slate-20 hover:bg-white hover:text-slate-900" > Generate ZK Proof</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
