"use client"

import React from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid' 
import { useDispatch } from 'react-redux'
import {  useAppSelector } from '@/store'

import { useRouter } from 'next/navigation'

type Props = {}

const profile = (props: Props) => {
  
  const user = useAppSelector((state) => state.userReducer)
  const router = useRouter()
  
 
    
  
 
  return (
    <div className="p-6"> 
    <div className="flex items-center space-x-2">

        
        <UserCircleIcon className="h-12 w-12"/>
        <h2>Username : {user.username}</h2>
        <h2>First Name: {user.first_name}</h2>
        <h2>Last Name: {user.last_name}</h2>

    </div>
   

    </div>
  )
}

export default profile; 