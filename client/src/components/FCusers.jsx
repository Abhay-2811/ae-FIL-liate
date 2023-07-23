import React from 'react'
import { Navbar } from './Navbar'

export const FCusers = () => {
  return (
    <div class='bg-slate-900 w-screen h-screen text-slate-50 pt-32 overflow-hidden  font-mono'>
      <Navbar />

      <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='px-6 py-3'>
                Verified Addresses
              </th>
              <th scope='col' class='px-6 py-3'>
                Industry
              </th>
              <th scope='col' class='px-6 py-3'>
                Storage Needed
              </th>
              <th scope='col' class='px-6 py-3'>
                Proposed Amount
              </th>
              <th scope='col' class='px-6 py-3'>
                Collateral Proposal
              </th>
              <th scope='col' class='px-6 py-3'>
                Deal ID
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row items-center justify-around'
              >
                0x2468135790
                <div>
                  {' '}
                  <img src='check.png' class='w-4'/>
                </div>
              </th>
              <td class='px-6 py-4'>Finance</td>
              <td class='px-6 py-4'>512GB</td>
              <td class='px-6 py-4'>250 FIL</td>
              <td class='px-6 py-4'>400 FIL</td>
              <td class='px-6 py-4'>1357924680</td>
            </tr>
            <tr class='border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row items-center justify-around'
              >
                0xDEADBEEF01
                <div>
                  {' '}
                  <img src='check.png' class='w-4'/>
                </div>
              </th>
              <td class='px-6 py-4'>Education</td>
              <td class='px-6 py-4'>2TB</td>
              <td class='px-6 py-4'>800 FIL</td>
              <td class='px-6 py-4'>1200 FIL</td>
              <td class='px-6 py-4'>9876543219</td>
            </tr>
            <tr class='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row items-center justify-around'
              >
                0xABC123DEF456
                <div>
                  {' '}
                  <img src='check.png' class='w-4'/>
                </div>
              </th>
              <td class='px-6 py-4'>Pharmaceuticals</td>
              <td class='px-6 py-4'>1TB</td>
              <td class='px-6 py-4'>400 FIL</td>
              <td class='px-6 py-4'>800 FIL</td>
              <td class='px-6 py-4'>1357913579</td>
            </tr>
            <tr class='border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row items-center justify-around'
              >
                0x1A2B3C4D5E6F
                <div>
                  {' '}
                  <img src='check.png' class='w-4'/>
                </div>
              </th>
              <td class='px-6 py-4'>Tech</td>
              <td class='px-6 py-4'>256GB</td>
              <td class='px-6 py-4'>150 FIL</td>
              <td class='px-6 py-4'>300 FIL</td>
              <td class='px-6 py-4'>9876543218</td>
            </tr>
            <tr>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row items-center justify-around'
              >
                0x5A5B5C5D5E5F
                <div>
                  {' '}
                  <img src='check.png' class='w-4'/>
                </div>
              </th>
              <td class='px-6 py-4'>Gaming</td>
              <td class='px-6 py-4'>4TB</td>
              <td class='px-6 py-4'>1000 FIL</td>
              <td class='px-6 py-4'>1500 FIL</td>
              <td class='px-6 py-4'>9876543217</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
