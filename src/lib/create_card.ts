
import { AxiosError } from "axios";
import instance from "./axios_instance";

export const createCard = async ({
  title,
  description,
  token,
  id,
  status,
  start_date,
  due_date,
}: {
  title: string;
  description: string;
  token: string;
  id:string;
  status: string;
  start_date:string;
  due_date: string;

}) => {
  try{

    const response = await instance.post(
      `/boards/card/create/${id}`,
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
    return response?.data;
  }
  catch(error: any){
    return error.message
  }
};

