'use client'

import React, { useState } from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import Modal from '@/components/Modal'
import {DateRangePicker, Range} from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { addDays, format } from 'date-fns';
import Calender_Card from '@/components/Calender_Card';


type Props = {}

const create_board = (props: Props) => {
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const [toggle,setToggle] = useState(false);
  const [calender,setCalender] = useState(false);
  const [state,setState] = useState(
    {
      startDate:new Date(),
      endDate:new Date(),
      key:'selection'
    }
  )

  const range = state.endDate.getDate() - state.startDate.getDate() + 1;
  const rangearrays = Array.from({length:range},(_,index) => index + 1);

  function handleChange(ranges:any){
    setState(ranges.selection)
    
  }
  

  const handleClick = () => {
    setToggle(!toggle)
    
  }

  return (
    <div className='p-6 w-full'>
        {/* top bar  */}
        <section className="bg-lightGray  p-5 flex items-center justify-between w-full"> 
          {/* left part */}
          <section>
            <CalendarDaysIcon className='w-8 h-8 cursor-pointer' onClick={() => setCalender(!calender)}/>
          </section>
          {/* right part */}
          <button className='rounded-xl border-2 border-solid border-secondary p-3 hover:text-primary hover:font-bold transition ease-in  hover:bg-secondary' onClick={handleClick} >  Create Board</button>
        </section>
        {/* calender section */}
        {
          calender ? (
            <div>
              <DateRangePicker ranges={[state]}  rangeColors={['#2196F3 ']}  onChange={handleChange} />
            </div>
          ): (null)
        }
        
        {/* create board section */}
        {
          toggle ? (
            <div className='flex items-center justify-center p-10'>

              <Modal toggle={toggle} setToggle={setToggle}/>
            </div>
          ): (
            null
          )
        }

        {/* body section  */}
      
        <div className={`mt-5 border-solid border-t-2 ${range > 3 ? "grid-cols-4": "grid-cols-"+range}  grid  border-lightGray w-full p-5`}>
          
          {
            rangearrays.map((index,array) => (

              <Calender_Card key={index} days={days} state={state} array={array}  range={range}/>
              
            ))
          }
         


          
        </div>

       
    </div>
  )
}

export default create_board