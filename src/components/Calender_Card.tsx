import React from 'react'

type Props = {
    days:string[],
    state:{
        startDate:Date,
        endDate:Date,
        key:string
    },
    range:number,
    array:number
}

const Calender_Card = ({days,state,range,array}: Props) => {
    const times = Array.from({length:24},(_,index) => index + 1);
    
  return (
    <div>
         <div className='flex flex-col justify-start items-start  border-2 border-solid border-black px-5  w-full '>
            <section className="flex flex-col space-y-[-10rem}">

            <p className="font-bold text-[60px] text-secondary">{+state.startDate.getDate().toLocaleString() + array}</p>

            <p className="font-bold text-lg ">{days[(state.startDate.getDay() + array)%7]}</p>
            </section>
            {
                range <= 1 ? (
 
            <section className="mt-5 w-full">
                {
                    times.map((index,time) => (
                        <section key={index} className="flex items-start">
                            <h3 className="font-bold mr-5">{time >= 12 ? `${time%12===0 ? 12 :time%12 }pm`:`${time}am`}</h3>
                            <section className='border-t  border-solid w-full h-[5rem]'>
                             
                        </section>
                        </section>
                    ))
                }
            </section>
                ): (
                    <section className="h-[15rem]">

                    </section>
                )
            }
        </div>

    </div>
  )
}

export default Calender_Card