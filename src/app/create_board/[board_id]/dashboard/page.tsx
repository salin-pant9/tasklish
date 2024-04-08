"use client";
import React, { useEffect, useState } from "react";
import Boards from "@/components/Boards";
import AreaChart from "@/components/AreaChart";
import RadarChart from "@/components/RadarChart";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppSelector } from "@/store";
import { increment } from "@/slices/userSlice";
import { redirect, useParams } from "next/navigation";
import { User } from "lucide-react";
import Dashboard_boards from "@/components/Dashboard_boards";
import { fetchCard } from "@/lib/fetch_cards";
type Props = {};

const Dashboard = (props: Props) => {
  const [events, setEvents] = useState<any>();
  const data = localStorage.getItem("user");
  const user = JSON.parse(data as string);
  const token = localStorage.getItem('token');
  const params = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    if(!user){
      redirect('/login')
    }
    dispatch(increment(user))
    fetchCard(token as string, params.board_id as string).then(data => setEvents(data.data));

    
  },[params.board_id])
  let incompleted = 0;
  let completed = 0;
  if(events) {
    events.map((event: any) => {
    if(event.status === "TODO"){
      incompleted++
    }else{
      completed++
    }
    })
  };
  // useEffect(() => {
  //   const fetchdata = async() => {

  //     const response = await fetch(`http://localhost:8000/boards/get-hours/${params.board_id}`,{
  //     headers: {
  //       Authorization : `Token ${token}`
  //     }
  //     });
  //     const data = await response.json();
  //      console.log(data.sunday);
  //   }
  //   fetchdata();
  // },[])
  return (
    <div className="p-6 flex flex-col gap-y-3">
      {/* header section  */}
      <div className="flex space-x-3 items-center w-full">
        <User className="h-12 w-12 " />
        {
          user ? (
            <p className='font-bold text-xl capitalize'>{user.username}</p>

          ): (null)
        }
      </div>
      {/* body section  */}

      <div className="mt-10 flex flex-wrap items-center w-full justify-evenly gap-[3rem]">
        <Dashboard_boards count={events ? events.length : 0 } title='No. of Cards Created'  />

        <Dashboard_boards count={completed} title='No. of Completed Tasks' className='text-green-600' />
        
        <Dashboard_boards count={incompleted} title='No. of Incompleted Tasks' className='text-destructive' />
      </div>
      {/* charts go here */}
      <div className="grid grid-cols-2 gap-x-5 w-full">
        <AreaChart events={events} />
        {/* <RadarChart /> */}
        <BarChart events={events}/>
        <PieChart events={events} />
         
      </div>

    </div>
  );
};

export default Dashboard;
