'use client'

import React, { useState } from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import Modal from '@/components/Modal'
import { DateRangePicker, Range } from "react-date-range";

import { addDays, format } from 'date-fns';
import Calender_Card from '@/components/Calender_Card';
import Boards from '@/components/Boards';
import Link from 'next/link';


type Props = {}

const create_board = (props: Props) => {
  const [toggle, setToggle] = useState(false);
 


  


  const handleClick = () => {
    setToggle(!toggle)

  }

  return (
    <div className='p-6 w-full'>
      {/* top bar  */}
      <section className="bg-lightGray  p-5 flex items-center justify-between w-full">
        {/* left part */}
        <section>
        </section>
        {/* right part */}
        <button className='rounded-xl border-2 border-solid border-secondary p-3 hover:text-primary hover:font-bold transition ease-in  hover:bg-secondary' onClick={handleClick} >  Create Board</button>
      </section>
      {/* calender section */}
     

      {/* create board section */}
      {
        toggle ? (
          <div className='flex items-center justify-center p-10'>

            <Modal toggle={toggle} setToggle={setToggle} />
          </div>
        ) : (
          null
        )
      }

      {/* body section  */}
         
{/* 
              <div className={`mt-5 border-solid border-t-2 ${range == 1 ? "grid-cols-1 " : "grid-cols-4"}   grid  border-lightGray  p-5`}>

        {
          rangearrays.map((index, array) => (

            <Calender_Card key={index} days={days} state={state} array={array} range={range} />

          ))
        }




      </div> */}



       

      <div className=" mt-[2rem] flex flex-wrap items-center justify-evenly">
        <Link href='/create_board/1'>

        <Boards  />
        </Link>

        <Boards />

        <Boards />
      </div>

    </div>
  )
}

export default create_board
