'use client'
import { userlogin } from '@/lib/userlogin'
import { AppDispatch } from '@/store'
import type { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'



const Login = () => {
  const [username, setUsername] = useState('')
  const [password,setPassword] = useState('')
 
  const router = useRouter();

  const handleClick = async (e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    const data = await userlogin({username,password})
   
    router.push('/dashboard');

   
  }

  return (
    <div className="flex items-center justify-center p-[5rem]">
      <form onSubmit={handleClick}>

      <div className=" border-solid border-2 border-black rounded-[10px] bg-lightGray  w-full md:w-[50%] p-5">
        {/* username */}
        <div className="flex flex-col space-y-2 mb-5">
          <h3> User Name: </h3>
          <input className="border-solid p-1 border-2 rounded-lg border-black shadow-sm " type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        </div>
        {/* password */}
        <div className="flex flex-col space-y-2 mb-5">
          <h3>Password: </h3>
          <input className= "border-solid p-1 border-2 rounded-lg border-black shadow-sm"   type="password" value={password} onChange={(e) =>setPassword( e.target.value)} />
        </div>
        {/* button */}
        <button className="flex hover:bg-secondary    items-center justify-center  border-solid p-2 rounded-xl w-full  border-2 border-black " >login</button>
        {/* link to signup  */}
          <h4 className="text-center mt-5">Havent registered yet ? 
            <span className='text-blue-500'> 
              <Link href="/signup"> Signup</Link>
            </span>
          </h4>
      </div>
      </form>
    </div>
  )
}

export default Login