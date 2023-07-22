import React from 'react'
import { Navbar } from './Navbar'
import { useAccount, useContract } from 'wagmi'
import axios from "axios";
import {
    Audio,
    BallTriangle,
    Bars,
    Circles,
    Grid,
    Hearts,
    Oval,
    Puff,
    Rings,
    SpinningCircles,
    TailSpin,
    ThreeDots,
  } from '@agney/react-loading';

export const ZKproof = () => {
  const gitAcc = 130;
  const bizData = 3;

  const getZkProof = async(git,biz)=>{
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json" 
     }
     
     let bodyContent = JSON.stringify({
       "gitAcc":git,
       "bizData": biz
     });
     
     let reqOptions = {
       url: "localhost:8000/proof",
       method: "POST",
       headers: headersList,
       data: bodyContent,
     }
     
     let response = await axios.request(reqOptions);
     console.log(response.data);
     
  }

  return (
    <div class="bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden  font-mono">
        <Navbar/>
        ZKproof
        <Oval/>
    </div>
  )
}
