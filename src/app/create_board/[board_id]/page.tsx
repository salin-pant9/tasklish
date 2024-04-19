"use client";

import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import Calender_Card from "@/components/Calender_Card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useParams } from "next/navigation";
import { fetchCard } from "@/lib/fetch_cards";
import { AddEvents } from "@/slices/eventSlice";
import {format} from 'date-fns'
import Link from "next/link";

type Props = {};

const Board_Name = ({}) => {
  const [calender, setCalender] = useState(true);
  
  const [state, setState] = useState({
    startDate: new Date() ,
    endDate: new Date(),
    key: "selection",
  });
  const range = state.endDate.getDate() - state.startDate.getDate() + 1;
  const rangearrays = Array.from({ length: range }, (_, index) => index + 1);
  const times = Array.from({ length: 24 }, (_, index) => index + 1);
  const boards = useSelector((state: RootState) => state.board)
  const dispatch = useDispatch();
  const params = useParams();
  const token = localStorage.getItem('token');
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  function handleChange(ranges: any) {
    setState(ranges.selection);
  }
  // useEffect(() => {
  //   fetchCard(token as string , params.board_id as string ).then(data => {
      
  //     data.map((item: any) => {
  //       dispatch(AddEvents({
  //           title: item.title,
  //           description: item.description,
  //           eventStartDate: format(new Date(item.start_date),'yyyy-MM-dd'),
  //           eventFinishDate: format(new Date(item.due_date), 'yyyy-MM-dd'),
  //           eventStarttime: new Date(item.start_date).getHours(),
  //           eventFinishtime: new Date(item.due_date).getHours(),
  //           status: item.status,
  //           id: item.id,
  //           board: item.board,
  //       }))
  //       console.log(item.start_date);
  //   })
  //   })
   
  
  // },[token, params.board_id])
  return (
    <div className="flex flex-col w-full">
    <div className='w-full p-3 mt-2 bg-lightGray'>
      {
        boards.items.map((item) => (
          
          <h3 className="font-bold text-[3rem] capitalize"> {
            item.id.toString() === params.board_id ? item.name : ''
          }</h3>
        ))
      }
    </div>
    <div className="p-5 w-full">
      <div className='flex w-full justify-between'>

      <CalendarDaysIcon
        className="w-8 h-8 cursor-pointer"
        onClick={() => setCalender(!calender)}
      />
      <Link href={`/create_board/${params.board_id}/dashboard`}>
      <button className="p-2 bg-black rounded-xl text-white font-bold ">Dashboard</button>
      </Link>
      </div>
      {calender ? (
        <div>
          <DateRangePicker
            ranges={[state]}
            rangeColors={["#2196F3 "]}
            onChange={handleChange}
          />
        </div>
      ) : null}
      <div className="flex items-start justify-start  w-full space-x-2  mt-[4rem]">
        <div className="flex flex-col items-center  mt-[5rem] ">
          {range <= 7
            ? times.map((index, time) => (
                <h3 className="font-bold mb-[1.5rem]" key={index}>
                  {time < 12
                    ? `${time == 0 ? 12 : time}am`
                    : `${time % 12 === 0 ? "12" : time % 12}pm`}
                </h3>
              ))
            : null}
        </div>

        <div
          className={` grid ${range > 7 ? "grid-cols-4" : `grid-cols-${range} `} w-full`}
        >
          {rangearrays.map((index, array) => (
            <Calender_Card
              key={index}
              days={days}
              state={state}
              array={array}
              range={range}
              times={times}
            />
          ))}
        </div>
      </div>
    </div>

    </div>
  );
};

export default Board_Name;

