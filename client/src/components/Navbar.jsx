import React from 'react'
import { useWeb3Modal, Web3Button } from '@web3modal/react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const { open, close } = useWeb3Modal()
  return (
    <div class='text-4xl p-6 font-mono border-2	w-full absolute top-0 z-10 flex flex-row items-center justify-between'>
      <Link to='/'>
        <div class='text-slate-50 hover:text-sky-400'>aeFILliate</div>
      </Link>

      <div class='text-xl flex flex-row items-center justify-center gap-16'>
        <Link to='/users'>
          <button>Users</button>
        </Link>
        <Link to='/verify'>
          <button>Verify</button>
        </Link>
        <Web3Button />
      </div>
    </div>
  )
}
