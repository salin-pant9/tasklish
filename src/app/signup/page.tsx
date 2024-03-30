"use client";
import { userRegsitration } from "@/lib/userRegistration";
import { increment } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const token = useSelector((state: RootState) => state.token.token);
  if (token) {
    redirect("/create_board");
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await userRegsitration({
      first_name,
      last_name,
      email,
      password,
      username,
    });
    if (data) {
      console.log(data);
      dispatch(
        increment({
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
        }),
      );
      if (user.username !== null) {
        router.push("/login");
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full flex-col">
      <h3 className="font-bold text-[20px] text-center mt-5 shrink-0 ">
        Sign Up
      </h3>
      <div className="flex items-center justify-center p-3 w-full sm:p-[1rem]">
        <form
          onSubmit={register}
          className="w-full flex items-center justify-center "
        >
          <div className=" border-solid border-2 border-lightGreen rounded-[10px]  w-full md:w-[50%] p-5">
            {/* username */}
            <div className="flex flex-col space-y-2 mb-5">
              <h3> User Name: </h3>
              <input
                className="border-solid p-1 border-2 rounded-lg border-black shadow-sm "
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* firstname */}
            <div className="flex flex-col space-y-2 mb-5">
              <h3> First Name: </h3>
              <input
                className="border-solid p-1 border-2 rounded-lg border-black shadow-sm "
                required
                type="text"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            {/* lastname */}
            <div className="flex flex-col space-y-2 mb-5">
              <h3> Last Name: </h3>
              <input
                className="border-solid p-1 border-2 rounded-lg border-black shadow-sm "
                required
                type="text"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>
            {/* email */}
            <div className="flex flex-col space-y-2 mb-5">
              <h3> Email: </h3>
              <input
                className="border-solid p-1 border-2 rounded-lg border-black shadow-sm "
                type="text"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* password */}
            <div className="flex flex-col space-y-2 mb-5">
              <h3>Password: </h3>
              <input
                className="border-solid p-1 border-2 rounded-lg border-black shadow-sm"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* button */}
            <button className="flex     items-center justify-center  border-solid p-2 rounded-xl w-full  border-2 border-black bg-[#000000] text-[#ffffff] ">
              Register
            </button>
            {/* link to signup  */}
            <h4 className="text-center mt-5">
              Already registered ?
              <span className="text-blue-500">
                <Link href="/login"> login</Link>
              </span>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
