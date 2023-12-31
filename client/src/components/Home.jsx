import React from 'react'
import {Navbar} from './Navbar'
import { Link } from 'react-router-dom'
import { HomeAnimation } from './HomeAnimation'

export const Home = () => {
  return (
    <div class="bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden flex flex-col items-center font-mono">
        <Navbar/>
        <div class="w-[60vw] h-full text-slate-50 flex flex-row items-center mt-10">
        <div class="w-4 h-[50vh] absolute top-25 left-10 border-2"></div>
        <div class="w-4 h-[40vh] absolute top-25 left-20 border-2"></div>
        <div class="w-[60vw] h-full text-slate-50 flex flex-col items-center mt-10 ">
        <h1 class="text-3xl font-normal ">Welcome to</h1>
        <HomeAnimation/>
        <p>Enabling Filecoin-Plus for high-end users without revealing their off-chain data by using ZK-Snark / Recurssive ZK-Snark Proofs.</p>
        <Link to={"/verify"}>
        <button class="w-64 h-14 border-2 mt-10 border-slate-100 hover:bg-white hover:text-slate-900 text-2xl">
            Verify
        </button>
        </Link>
        {/* <div class="w-[70vw] h-5 absolute bottom-10 border-2"></div>
        <div class="w-[60vw] h-5 absolute bottom-10 border-2 flex items-center">ZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZKZK</div> */}
        </div>
        <div class="w-4 h-[50vh] absolute right-10 border-2"></div>
        <div class="w-4 h-[40vh] absolute top-25 right-20 border-2"></div>
        </div>
    </div>
  )
}