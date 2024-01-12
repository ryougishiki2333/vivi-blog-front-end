import { sendRequest } from "./request";

type loginRes = {
  message: string;
  data: {
    token: string;
  };
};

export const findUserById = async (
  id: number
): Promise<any> => {
  const response = await sendRequest("api/user?id="+id.toString(), {
    method: "GET",
  });
  return response.json();
};

export const userLogin = async (
  username: string,
  password: string
): Promise<any> => {
  const response = await sendRequest("api/user/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const userRegister = async (username: string, password: string, email:string) => {
  const response = await sendRequest(
    "api/user/register",
    {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
    }
  );

  return response.json();
};
