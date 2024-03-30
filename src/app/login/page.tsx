"use client";
import { userlogin } from "@/lib/userlogin";
import { AppDispatch } from "@/store";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect, useRouter,  } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await userlogin({ username, password });

    if(data){

      router.push("/dashboard");
    }
  };
  const token = useSelector((state: RootState) => state.token.token);
  if (token) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col items-center w-full ">
      <h3 className="font-bold text-[20px] text-center mt-5">LogIn</h3>

      <div className="flex items-center justify-center w-[100%] p-3">
        <form
          onSubmit={handleClick}
          className=" border-solid border-2 border-lightGreen rounded-[10px]    w-[40%] mt-5 p-5"
        >
          <div className="flex items-center justify-center flex-col w-[100%] ">
            {/* username */}
            <div className="flex flex-col space-y-2 mb-5">
              <h3> User Name: </h3>
              <input
                className="border-solid p-1 border-2 rounded-lg border-black shadow-sm "
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* password */}
            <div className="flex flex-col space-y-2 mb-5">
              <h3>Password: </h3>
              <input
                className="border-solid p-1 border-2 rounded-lg border-black shadow-sm"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* button */}
            <button className="flex hover:bg-secondary    items-center justify-center  border-solid p-2 rounded-xl  flex items-center justify-center text-center w-[13rem] bg-[#000000] text-[#ffffff] font-bold border-2 border-black ">
              Login
            </button>
            {/* link to signup  */}
            <h4 className="text-center mt-5">
              Havent registered yet ?
              <span className="text-blue-500">
                <Link href="/signup"> Signup</Link>
              </span>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
