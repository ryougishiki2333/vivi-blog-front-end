
import { sendRequest, baseURL } from "./request";



// const token = window.localStorage.getItem('token')

export const tagCreate = async (
  name:string
): Promise<any> => {
  const response = await sendRequest("api/tag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name:name}),
  });
  return response.json();
};

export const tagDelete = async (
  id:number
): Promise<any> => {
  const response = await sendRequest("api/tag?id="+(id.toString()), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
};

export const tagFindAll = async () => {
  const response = await sendRequest(
    "api/tag/get/all",
  );

  return response.json();
};
