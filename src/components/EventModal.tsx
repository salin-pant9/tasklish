import React, { useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { AddEvents } from '@/slices/eventSlice'
import { AppDispatch } from '@/store'
import {format} from 'date-fns'

type Props = {
    toggle:boolean,
    setToggle:React.Dispatch<React.SetStateAction<boolean>>
    time:number 
    setTime:React.Dispatch<React.SetStateAction<number>>
    date:  string
    
}

const EventModal = ({toggle,setToggle,time,setTime,date}: Props) => {
    const [title,setTittle] = useState('no title')
    const [description,setDescription] = useState('')
    const [eventDate,setEventDate] = useState(date)  ;  


    const dispatch = useDispatch<AppDispatch>()
    
   

    function handleClick(){
        setToggle(false)
    }
    function handleDateChange(e:React.ChangeEvent<HTMLInputElement>){
      const stringDate = new Date(e.target.value) 
      setEventDate(format(stringDate,'yyyy-MM-dd'))
     
        
    }
    
    
    function Submit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        dispatch(AddEvents({title,description,time,eventDate}))
        setToggle(false)
    }

  return (
    <div>
         {
                         toggle ? (
                           <div className=' w-[50%]  absolute  left-[30%] top-[40%] bg-lightGray border '>
                                <div className='p-3'>
                                    <div className='flex items-end justify-end'>
                                        

                                        <XMarkIcon className='h-10 w-10 cursor-pointer' onClick={handleClick}/>
                                        
                                    </div>
                                  <form  className='flex flex-col gap-y-5' onSubmit={  Submit}>
                                    <section className='flex flex-col space-y-3'>
                                      <h1 className='font-600 text-xl'>Title</h1>
                                      <input type="text" className='border-b-2 outline-none bg-transparent' onChange={e => setTittle(e.target.value)}/>
                                    </section>
                                    <section className='flex flex-col space-y-3'>
                                        <h3 className=' text-lg'>Description</h3>
                                        <input type="text" className='border-b-2 outline-none bg-transparent' onChange={e => setDescription(e.target.value)}/>
                                    </section>
                                    <section className='flex flex-col space-y-3'>
                                        <h3>Date</h3>
                                        <input type="date" className='border-b-2 outline-none bg-transparent'  onChange={handleDateChange} defaultValue={eventDate} />
                                    </section> 
                                    <section className='flex flex-col space-y-3'>
                                        <h3>Time duration</h3>
                                        <input type="text" className='border-b-2 outline-none bg-transparent' defaultValue={time <  12  ? `${time == 0 ? 12 : time}am` :`${time % 12 === 0 ? '12' : time % 12}pm`} onChange={(e) =>setTime(+(e.target.value)) } />
                                    </section>
                                    <section className='flex items-end justify-end'>
                                        <button className='bg-primary text-[#ffffff] rounded-xl p-3 w-1/6'>Save</button>
                                    </section>
                                  </form>
                                </div>
                           </div>
                        ): (
                          null
                        )
                      }
    </div>
  )
}

export default EventModal