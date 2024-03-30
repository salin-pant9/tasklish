"use client";

import { RootState } from "@/store";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const token = useSelector((state: RootState) => state.token.token);
  if (token) {
    redirect("/create_board");
  } else {
    return (
      <main className="flex items-center bg-lightGray justify-center w-full flex-col h-screen  ">
        <h2 className="italic bg-lightGray font-bold text-[20px] p-3 rounded-xl">
          No.1 Task Manager
        </h2>
        <h1 className="font-extrabold text-[3.5rem] ">
          Tasklish helps teams move{" "}
        </h1>
        <h4 className="text-[#ffffff] font-extrabold text-2xl bg-gradient-to-r from-[#7F27FF] to-[#F72798] p-3  ">
          Make your day easy and be productive.
        </h4>
        <h5 className="text-[#7D7C7C] text-xl mt-3">
          {" "}
          Collaborate, manage projects, and react new productivity peaks.
        </h5>
        <h5 className="text-[#7D7C7C] text-xl ">
          {" "}
          From high rises to home office, the way your team works is unique-
          accomplish it all with{" "}
          <strong className="bg-lightGreen text-[#ffffff] p-2 font-bold rounded-xl ">
            Tasklish
          </strong>
        </h5>
        <button className="p-2 rounded-xl font-bold text-xl text-[#ffffff] bg-[#000000] mt-5 w-[5rem]">
          <Link href="/signup">Signup</Link>
        </button>
      </main>
    );
  }
}
