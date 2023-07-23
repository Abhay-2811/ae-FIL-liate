import React from 'react'
import {Navbar} from './Navbar'
import { Link } from 'react-router-dom'
import { HomeAnimation } from './HomeAnimation'

export const Home = () => {
  return (
    <div class="bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden flex flex-col items-center font-mono">
        <Navbar/>
        <div class="w-[80vw] h-full text-slate-50 flex flex-col items-center mt-10">
        <h1 class="text-3xl font-normal ">Welcome to</h1>
        <HomeAnimation/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam iure accusamus deserunt perspiciatis reprehenderit voluptates. Ut ea repellendus expedita sed, fugiat consequuntur quidem nam, libero, sunt cum atque nequ</p>
        <Link to={"/verify"}>
        <button class="w-64 h-14 border-2 mt-10 border-slate-100 hover:bg-white hover:text-slate-900 text-2xl">
            Verify
        </button>
        </Link>
        </div>
    </div>
  )
}
