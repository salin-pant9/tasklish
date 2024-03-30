import instance from "./axios_instance";

export const fetchBoard = async ({ token }: { token: string }) => {
  const response = await instance.get("/boards/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response;
};
