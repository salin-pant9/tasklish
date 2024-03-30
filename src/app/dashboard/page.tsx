"use client";
import React, { useEffect } from "react";
import Boards from "@/components/Boards";
import AreaChart from "@/components/AreaChart";
import RadarChart from "@/components/RadarChart";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppSelector } from "@/store";
import { increment } from "@/slices/userSlice";
import { redirect } from "next/navigation";
import { User } from "lucide-react";
import Dashboard_boards from "@/components/Dashboard_boards";
type Props = {};

const Dashboard = (props: Props) => {
 const events = useSelector((state: RootState) => state.event);  
  const data = localStorage.getItem("user");
  const user = JSON.parse(data as string);
  const dispatch = useDispatch()
  useEffect(() => {
    if(!user){
      redirect('/login')
    }
    dispatch(increment(user))
    console.log(events.items);
  })
  
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
        <Dashboard_boards count={events.items.length} title='No. of Cards Created'  />

        <Dashboard_boards count={0} title='No. of Completed Tasks' className='text-green-600' />
        
        <Dashboard_boards count={0} title='No. of Incompleted Tasks' className='text-destructive' />
      </div>
      {/* charts go here */}
      <div className="grid grid-cols-2 gap-x-5 w-full">
        <AreaChart />
        <RadarChart />
        <BarChart />
        <PieChart />
      </div>

    </div>
  );
};

export default Dashboard;
