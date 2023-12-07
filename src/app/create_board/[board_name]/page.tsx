'use client'

import { CalendarDaysIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import Calender_Card from '@/components/Calender_Card';

type Props = {}

const Board_Name = (props: Props) => {
  const [calender, setCalender] = useState(true);
  const [state, setState] = useState(
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  )
  const range = state.endDate.getDate() - state.startDate.getDate() + 1;
  const rangearrays = Array.from({ length: range }, (_, index) => index + 1);
  const times = Array.from({ length: 24 }, (_, index) => index + 1);
    
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

console.log(state.startDate)
    
  function handleChange(ranges: any) {
    console.log(ranges)
    setState(ranges.selection)

  }

  return (
    <div className="p-5 w-full">
          <CalendarDaysIcon className='w-8 h-8 cursor-pointer' onClick={() => setCalender(!calender)} />
          {
        calender ? (
          <div>
            <DateRangePicker ranges={[state]} rangeColors={['#2196F3 ']} onChange={handleChange} />
          </div>
        ) : (null)
      }
      <div className="flex items-start justify-start  w-full space-x-2  mt-[4rem]">
        <div className="flex flex-col items-center  mt-[5rem] ">

     
        {
            range <= 7 ?
            (

                times.map((index,time) => (
    
                    <h3 className="font-bold mb-[1.5rem]" key={index}>{time <  12  ? `${time == 0 ? 12 : time}am` :`${time % 12 === 0 ? '12' : time % 12}pm` }</h3>
                ))
            ):(null)
        }
       </div>

        <div className={` grid ${range >  7 ? 'grid-cols-4': `grid-cols-${range} `} w-full`}>
          
      
            {
                rangearrays.map((index, array) => (
                    <Calender_Card key={index} days={days} state={state} array={array} range={range} times={times} />
               
                  ))
            }
        </div>
        </div>

    </div>
  )
}

export default Board_Name