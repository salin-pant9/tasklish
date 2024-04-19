

import { AxiosError } from "axios";
import instance from "./axios_instance";
import { toast } from "sonner";

export const update_Card = async ({
  title,
  description,
  token,
  id,
  board_id,
  status,
  start_date,
  due_date,
}: {
  title: string;
  description: string;
  token: string;
  id:number;
  board_id: number;
  status: string;
  start_date:string;
  due_date: string;

}) => {
  try{
    // console.log(id);
    const response = await instance.put(
      `/boards/card/update/${board_id}/${id}`,
      {
        title,
        description,
        status,
        start_date,
        due_date,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      },
    );
    toast("Event updated Successfully")
    return response?.data;
  }
  catch(error: any){
    toast("Something went wrong");
    return error.message
  }
};

