import React from 'react'
import { useWeb3Modal, Web3Button } from '@web3modal/react'
export const Navbar = () => {
  const { open, close } = useWeb3Modal()
  return (
    <div class="text-4xl p-6 font-mono border-2	w-full absolute top-0 z-10 flex flex-row items-center justify-between">
      <div class="text-slate-50 hover:text-sky-400">aeFILiate</div>
      <div class="text-xl flex justify-center">
        <Web3Button />
      </div>
    </div>
  )
}
