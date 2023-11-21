'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useLocalStorage from '@xmanscript/uselocalstorage';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import { AppDispatch, useAppSelector } from '@/store';
import logo from "public/logo.png"
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToken } from '@/slices/tokenSlice';



function Navbar() {
  const user = useAppSelector((state) => state.userReducer)
  const dispatch = useDispatch<AppDispatch>()

  const [token,setToken] = useState(false)
  const {getItem} = useLocalStorage('token')
  useEffect(() => {
    const data = getItem();

    if(data) {
      dispatch(addToken(data))
      setToken(true)
    }
  },[token])
  
 
  

  return (
    <div className='flex items-center justify-between h-16 w-full p-6 text-primary  bg-lightGray top-0 sticky z-10'>
        {/* App Icon  */}
        <div>
            <Image alt="Tasklish" src={logo} height={10} width={64} style={{objectFit:'cover'}} />
        </div>
        {/* middle section  */}
        <div></div>
        {token ? (
          <>
         
          <div className='flex items-center space-x-2'>
          <UserCircleIcon className="h-12 w-12"/>
          <Link href={'/profile'}>
          <h2>{user.username}</h2>
          </Link>
          </div>
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