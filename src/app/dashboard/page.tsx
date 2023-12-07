'use client'
import React from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import Boards from '@/components/Boards'
import AreaChart from '@/components/AreaChart'
import RadarChart from '@/components/RadarChart'
import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'
type Props = {}

const dashboard = (props: Props) => {
  return (
    <div className="p-6 ">
      
        {/* header section  */}
          <div className='flex items-center w-full  space-x-5'>
           

            <UserCircleIcon className='h-12 w-12 '/>
            <h2 className="font-extrabold text-xl ">username</h2>
           
          </div>
        {/* body section  */}

        {/* charts go here */}
        <div className="grid grid-cols-2 gap-5">

        <AreaChart/>
        <RadarChart/>
        <BarChart/>
        <PieChart/>

        </div>

        <div className="mt-20 flex flex-wrap items-center w-full justify-evenly gap-[3rem]">
          <Boards/>
          <Boards/>
          <Boards/>
          <Boards/>
          <Boards/>
       </div>

    </div>

  )
}

export default dashboard
