import instance from "./axios_instance";

export const create_boards = async ({
  name,
  description,
  token,
}: {
  name: string;
  description: string;
  token: string;
}) => {
  const response = await instance.post(
    "/boards/create",
    {
      name,
      description,
    },
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  );
  return response?.data;
};

