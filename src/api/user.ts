import { sendRequest } from "./request";

type loginRes = {
  message: string;
  data: {
    token: string;
  };
};

export const userLogin = async (
  username: string,
  password: string
): Promise<loginRes> => {
  const response = await sendRequest("http://localhost:4000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const userRegister = async (username: string, password: string) => {
  const response = await sendRequest(
    "http://localhost:4000/api/user/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  return response.json();
};
