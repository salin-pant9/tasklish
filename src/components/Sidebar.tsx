import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {


  return (
    <div className="w-[12rem] text-center px-5 bg-lightGray  cursor-pointer   h-screen p-4">
      {/* list of options  */}

      <ul className=" flex flex-col justify-start mt-5 gap-y-10 h-[50rem]  text-lg ">
        <Link href='/dashboard'>
          <li className="">Dashboard</li>
        </Link>
        <Link href='/create_board'>

          <li >Calender</li>
        </Link>
        <li >Setting</li>

      </ul>
    </div>
  )
}

export default Sidebar
