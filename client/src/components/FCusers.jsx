import React from 'react'
import { Navbar } from './Navbar'

export const FCusers = () => {
  return (
    <div class="bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden  font-mono">
        <Navbar/>
        <table class="table-auto">
            <tr>
                <th>Verified Addresses</th>
                <th>Storage Need</th>
                <th>Proposed Amount</th>
                <th>Collateral Proposal</th>
                <th>Deal ID</th>
            </tr>
        </table>
    </div>
  )
}
