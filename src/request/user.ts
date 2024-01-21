import { sendRequest } from "./request";

type loginRes = {
  message: string;
  data: {
    token: string;
  };
};

type registerRes = {
  id: number;
  username:string;
  email:string;

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
  username: string
): Promise<any> => {
  const response = await sendRequest("api/user/login", {
    method: "POST",
    body: JSON.stringify({username}),
  });
  return response.json();
};

export const userRegister = async (username: string, email:string) :Promise<registerRes>=> {
  const response = await sendRequest(
    "api/visitor/register",
    {
      method: "POST",
      body: JSON.stringify({ username, email }),
    }
  );

  return response.json();
};
