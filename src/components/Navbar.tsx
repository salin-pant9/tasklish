'use client'

import Link from 'next/link'
import React from 'react'

function Navbar() {
 let hastoken = false;
 if(localStorage.getItem('token') != null){
  hastoken = true
 }
 
  

  return (
    <div className='flex items-center justify-between h-10 w-full p-6 text-primary bg-lightGray top-0 sticky z-10'>
        {/* App Icon  */}
        <div>
            <h1 className="font-bold text-lg">Tasklish</h1>
        </div>
        {/* middle section  */}
        <div></div>
        {hastoken ? (
          <>
          <Link href="/dashboard">
            <h2>Dashboard</h2>
          </Link>
          <Link href={'/profile'}>
          <h2>profile</h2>
          </Link>
          </>
        ): (

        
        <div className="flex items-center space-x-5">
            <Link href="/login">
            <h2 className="p-2 hover:border-solid hover:border-2 hover:border-black rounded-lg">Login</h2>
            </Link>
            <Link href="/signup">
            <h2>Signup</h2>
            </Link>
        </div>
        )}
    </div>
  )
}

export default Navbar