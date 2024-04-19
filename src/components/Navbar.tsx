'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useLocalStorage from '@xmanscript/uselocalstorage';
import { UserCircleIcon, BellIcon } from '@heroicons/react/20/solid';
import { AppDispatch, useAppSelector } from '@/store';
import logo from "public/logo.png"
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToken } from '@/slices/tokenSlice';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { redirect, useRouter } from 'next/navigation';
import { logout } from '@/lib/logout';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from './ui/label';
import { Input } from './ui/input';




function Navbar() {
  const router = useRouter();
  const data = localStorage.getItem("user");
  const user = JSON.parse(data as string);
  const dispatch = useDispatch<AppDispatch>()
  const token = localStorage.getItem('token');
  useEffect(() => {
      dispatch(addToken(token as string))

    }
  )

    const Logout =  () => {
      logout();
      router.refresh();
    }


  return (
    <div className='flex items-center justify-between h-16 w-full p-6 text-primary  bg-[#ffffff] top-0 sticky z-10'>
      {/* App Icon  */}
      <div>
        <Image alt="Tasklish" src={logo} height={10} width={64} style={{ objectFit: 'cover' }} />
      </div>
      {/* middle section  */}
      <div></div>
      {token ? (
        <>

          <div className='flex items-center space-x-6'>
            {/* <BellIcon className="h-8 w-8" /> */}
           <Popover>
            <PopoverTrigger asChild>


            <Avatar className='cursor-pointer'>
            <AvatarFallback>{user.username.slice(0,1).toUpperCase()}</AvatarFallback>
              {/* TODO: Add a user profile */}

            </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <Sheet>
                <SheetTrigger asChild>

                     <div className='p-2 bg-[#ffffff] cursor-pointer hover:bg-[#DDDDDD]'>
                        Profile
                      </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Change your profile here
                    </SheetDescription>
                  </SheetHeader>
                 <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                      <Label htmlFor='name' className='text-right'>
                        Username
                      </Label>
                      <Input id='name' value={user.username} className='col-span-3'/>
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4 gap-y-3'>
                      <Label htmlFor='firstname' className='text-right'>
                        First Name
                      </Label>
                      <Input type="text" id='firstname' value={user.first_name} className='col-span-3' />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4 gap-y-3'>

                      <Label htmlFor='lastname' className='text-right'>
                      Last Name
                      </Label>
                      <Input type="text" id='lastname' value={user.last_name} className='col-span-3' />
                    </div>

                  </div> 
                  <SheetFooter>
                    <SheetClose asChild>
                      <button className='bg-blue-500 text-white font-bold rounded-xl p-3' type='submit'>Save changes</button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              <div onClick={Logout} className='p-2 text-destructive bg-[#ffffff] cursor-pointer hover:bg-[#DDDDDD]'>
                Logout
              </div>
            </PopoverContent>
            </Popover> 
          </div>
        </>
      ) : (


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
