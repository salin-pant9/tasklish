import React, { useState } from 'react'
import EventModal from './EventModal'
import { useAppSelector } from '@/store'
import {format} from 'date-fns'


type Props = {
  days: string[],
  state: {
    startDate: Date,
    endDate: Date,
    key: string
  },
  range: number,
  array: number,
  times:number[]
}

const Calender_Card = ({ days, state, range, array ,times}: Props) => {
  const [toggle, setToggle] = useState(false);
  const [propTime,setPropTime] = useState<number>(0)

  const event = useAppSelector((state) => state.event)

  let individualDate = format(state.startDate,'yyyy-MM-ddd');
  const specificDate = +individualDate.slice(8) + array;
  individualDate = individualDate.slice(0,-2) + specificDate;
  
  // const [date,setDate] = useState(individualDate)
  
  function handleClick(time:number){
  
    setToggle(true)
    setPropTime(time)
    
   
  }
   event.items.map(item => {
    console.log(item.eventDate)
    console.log(individualDate)
  })



  return (
    
      <div className={`flex flex-col justify-start items-start  border-r-2 w-full `}>
        <section className="flex flex-col space-y-[-10rem} ml-5 ">

          <p className="font-bold text-[30px] text-secondary">{specificDate }  </p>

          <p className="font-bold  ">{days[(state.startDate.getDay()+ array) % 7]}</p>
        </section>
       

            <section className="mt-5 w-full">
              {
                range <= 7 ? (

                  times.map((index, time) => (
                    <>
                    
                    
                   
                     
                      <section key={index}  className={`border-t  w-full min-h-[3rem] flex items-center  cursor-pointer`} onClick={() =>  handleClick(time)}>
                        {
                          event.items.filter(item => item.eventDate === individualDate &&  item.time === time).map((e,index) => (
                            <p className='bg-primary text-[#ffffff] min- w-1/5 rounded-xl px-2 mt-2 '>{e.title}</p>
                          ))
                        }
                              {/* <p>{time}</p> */}
                             

                      </section>
                   </>
                  ))
                ): (
                  <section className={`  h-[20rem] border-b-2 cursor-pointer`} onClick={(e) => setToggle(true)}> 
                      
                  </section>
                )
              }
            </section>
            <section>
                <EventModal toggle={toggle} setToggle={setToggle} time={propTime} setTime={setPropTime} date={individualDate}/>
             </section>
           
           
     
           
           
          
        
      </div>

    
  )
}

export default Calender_Card
