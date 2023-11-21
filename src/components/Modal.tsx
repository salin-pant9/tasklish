'use client'


import { create_boards } from '@/lib/create_boards'
import { useAppSelector } from '@/store'
import useLocalStorage from '@xmanscript/uselocalstorage'
import React, {  Dispatch,  FormEvent,  SetStateAction, useState } from 'react'

type Props = {
  toggle:boolean,
  setToggle:Dispatch<SetStateAction<boolean>>
}

const Modal = ({toggle,setToggle}:Props) => {
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const {token} = useAppSelector((state) => state.token)

 

 const  createBoard = async (e:FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
    const result = await create_boards({ name, description,token });
    console.log()
  }

  return (
    <div className='min-w-[50rem] min-h-[100px] bg-lightGray flex items-center justify-center w-full'>
      <form className="space-y-10 my-5 min-w-[50rem] p-10 w-full " onSubmit={createBoard}>
        <div className="space-y-3">
          <h1 className="font-bold text-lg">
            Name:
          </h1>
          <input value={name} required  onChange={(e) => setName(e.target.value)} className='outline-none rounded-xl p-2  w-full' type="text" />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-lg">Description:</h1>
          <input value={description} required  onChange={(e) => setDescription(e.target.value)} className='outline-none rounded-xl p-2 w-full' type="text" />
        </div>
        <div  className="flex items-center justify-between">
          <button className="p-4 font-bold rounded-xl border-2 border-solid border-primary" onClick={() => setToggle(false)}>Cancel</button>
          <button className="p-4 font-bold rounded-xl border-2 border-solid border-primary" >Create</button>

        </div>
      </form>
    </div>
  ) 
}

export default Modal