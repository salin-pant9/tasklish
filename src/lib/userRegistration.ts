import axios from "axios";
import { User } from "../../type";
import instance from "./axios_instance";

export const userRegsitration = async ({
  first_name,
  last_name,
  email,
  username,
  password,
}: User) => {
  const data = await instance.post("/users/register", {
    username,
    email,
    first_name,
    last_name,
    password,
  });
  localStorage.setItem("token", data?.data?.token);
  localStorage.setItem("user", JSON.stringify(data?.data?.user));
  return data?.data?.user;
};
