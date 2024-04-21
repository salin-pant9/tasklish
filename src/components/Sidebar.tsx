"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
type Props = {};

const Sidebar = (props: Props) => {
  const token = useSelector((state: RootState) => state.token.token);
  const boards = useSelector((state: RootState) => state.board) 

  if (token) {
    return (
      <div className="w-[12rem]  px-4 flex flex-col gap-y-5   cursor-pointer  p-4">
        {/* list of options  */}

        <ul className="  mb-10 flex flex-col justify-start mt-5 gap-y-10  text-lg ">
          {/* <Link href="/dashboard">
            <li className="">Dashboard</li>
          </Link> */}
          <Link href="/create_board">
            <li>Calender</li>
          </Link>
          {/* <li>Settings</li> */}
        </ul>
        <ul className="flex flex-col p-1 justify-start gap-y-5">
          {
            boards.items.map(board => (
          <Link href={`/create_board/${board.id}`} key={board.id}>
          <li key={board.id} className="hover:bg-lightGreen hover:font-semibold hover:text-lightGray p-1 rounded-xl">
            {board.name}
          </li>
          </Link>
            ))
          }

        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Sidebar;
