import React from 'react'

type Props = {}

const Boards = (props: Props) => {
  return (
    <div>
        <section className=" p-5 border-4 border-lightGreen  text-lightGray rounded-xl flex bg-lightGreen  flex-col items-center shadow-xl">
            <h2 className='text-[1.5rem]  font-extrabold'>NO. of tasks created</h2>
            <p className='font-extrabold text-2xl'>52</p>
        </section>
    </div>
  )
}

export default Boards