import { toast } from "sonner";
import instance from "./axios_instance";
import { redirect } from "next/navigation";

export const userlogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try{

    const response = await instance.post("/users/login", {
      username,
      password,
    });
    if (response.status !== 200) {
      alert(response.data.non_field_errors);
    }
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    toast("Logged in successfully");
    
    return response?.data;
    
  }catch(error: any){
    toast(error.response.data.non_field_errors[0]);
    return error
  }
};
