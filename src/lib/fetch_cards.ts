
import instance from "./axios_instance";
export const fetchCard = async (token : string, id: string ) => {
  const response = await instance.get(`/boards/cards/${id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
  return  response.data;
};