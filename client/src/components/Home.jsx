import React from 'react'
import {Navbar} from './Navbar'
import { Link } from 'react-router-dom'
import { Rings } from '@agney/react-loading';

export const Home = () => {
  return (
    <div class="bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden  font-mono">
        <Navbar/>
        <Link to={"/verify"}>
        <button class="w-24 border-2">
            Verify
        </button>
        </Link>
    </div>
  )
}
