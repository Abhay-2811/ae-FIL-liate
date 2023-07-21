import React from 'react'
import { Navbar } from './Navbar'
import { IdAuth } from './IdAuth'
import { GithubAuth } from './GithubAuth'
import { BusinessVerify } from './BusinessVerify'

export const Verify = () => {
  return (
    <div class="bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden font-mono ">
        <Navbar/>
        <div class=" w-screen h-full flex flex-col items-center">
            Verify
            <div class="w-full h-full flex flex-row justify-between pl-32 pr-32 pt-12">
            <IdAuth/>
            <GithubAuth/>
            <BusinessVerify/>
            </div>
            <button class="w-48 border-2 border-slate-100 hover:bg-white hover:text-slate-900 absolute bottom-12">Generate Proof</button>
        </div>
    </div>
  )
}
