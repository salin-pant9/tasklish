import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {


  return (
    <div className="w-[10rem] px-5 text-secondary   cursor-pointer  bg-primary h-screen p-4">
        {/* list of options  */}
    
        <ul className=" flex flex-col space-y-5 font-bold text-lg ">
            <li className="hover:text-lightGray">Dashboard</li>
            <li className="hover:text-lightGray">Report</li>
            <li className="hover:text-lightGray">Calender</li>
            <li className="hover:text-lightGray">Setting</li>
            
        </ul>
    </div>
  )
}

export default Sidebar