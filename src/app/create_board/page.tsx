"use client";

import React, { useEffect, useState } from "react";
import crypto from 'crypto'
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Modal from "@/components/Modal";
import { DateRangePicker, Range } from "react-date-range";
import instance from "@/lib/axios_instance";
import { addDays, format } from "date-fns";
import Calender_Card from "@/components/Calender_Card";
import Boards from "@/components/Boards";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { fetchBoard } from "@/lib/fetchBoard";
import { AddBoards } from "@/slices/boardSlice";
import { redirect } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import axios from "axios";
import submitEsewaform from "@/lib/submitEsewaform";

type Props = {};

function Create_board(props: Props) {
  const token = useSelector((state: RootState) => state.token.token);
  const boards = useSelector((state: RootState) => state.board);
  const payment = useSelector((state:RootState) => state.payment);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const handleClick = () => {
    setToggle(!toggle);
  };
  const handleEsewa = async () => {
    const url = await submitEsewaform("https://a.khalti.com/api/v2/epayment/initiate/");
    window.location.href = url;
  }


  const getBoards = async (token: string) => {
    try {
      const response = await instance.get(`/boards/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response) {
        // setCount(() => response.data.length);
        response.data.map((item: { name: any; description: any; id: any; }) => {
          dispatch(
            AddBoards({
              name: item.name,
              description: item.description,
              id: item.id,
            }),
          );
        });
        console.log(response)
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if(!token){
      redirect('/login')
    }
    setLoading(true);
    if (token) {
      console.log(payment.status);
      getBoards(token);
    }
    console.log(boards)
  }, [token]);

  return (
    <div className="p-6 w-full">
      {/* top bar  */}
      <section className="  p-5 flex items-center justify-between w-full">
        {/* left part */}
        <section>{token}</section>
        <section>Count = {count}</section>
        {/* right part */}
        {count !== 5 || payment.status === 'Completed' ? (
        <button
          className="rounded-xl border-2 border-solid bg-[#000000] text-[#ffffff] p-3 transition ease-in  "
          onClick={handleClick}
        >
          {" "}
          Create Board
       </button>
 //
        ): (

          <Dialog>
            <DialogTrigger asChild>

        <button
          className="rounded-xl border-2 border-solid bg-[#000000] text-[#ffffff] p-3 transition ease-in  "
        >
          {" "}
          Create Board
        </button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[500px] '>
              <DialogHeader>
                <DialogTitle>Subscription Needed</DialogTitle>
                <DialogDescription>Your Board Creation limit has been exceeded. Please "click" continue to Subscribe.<br/>Note: The price is Rs.500.

                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <button className="w-full border-b border-black rounded-xl">Cancel</button>
                <button onClick={handleEsewa} className='w-full bg-blue-600 rounded-xl text-white font-bold'>Continue</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </section>
      {/* calender section */}

      {/* create board section */}
      {toggle ? (
        <div className=" space-y-5 flex items-center justify-evenly w-full p-10">
          <Modal toggle={toggle} setToggle={setToggle} />
        </div>
      ) : null}

      {/* body section  */}

      {/* 
              <div className={`mt-5 border-solid border-t-2 ${range == 1 ? "grid-cols-1 " : "grid-cols-4"}   grid  border-lightGray  p-5`}>

        {
          rangearrays.map((index, array) => (

            <Calender_Card key={index} days={days} state={state} array={array} range={range} />

          ))
        }



      
      </div> */}
      {loading ? (
        <h2>Loading.....</h2>
      ) : (
        <div className=" mt-[2rem] flex flex-wrap items-start justify-evenly">
          {boards.items.length > 0 ? (

            boards.items.map((item, index) => (
              <Link key={index} href={`/create_board/${item.id}`}>
                <Boards name={item.name} description={item.description} />
              </Link>
            ))
          ) 
         : (
          <div className="h-[10rem] flex items-center justify-center">

            <h3 className="text-[#C7C8CC] text-xl font-bold italic">Please create some board</h3>
          </div>
         ) }
        </div>
      )}
    </div>
  );
}

export default Create_board;
