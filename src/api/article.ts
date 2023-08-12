
import { sendRequest, baseURL } from "./request";


type articleCreateRes = {
  title:string;
  content:string;
  articleState: number

}

const token = window.localStorage.getItem('token')

export const articleCreate = async (
  article:articleCreateRes
): Promise<any> => {
  const response = await sendRequest("api/article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token": `Bearer ${token}`
    },
    body: JSON.stringify(article),
  });
  return response.json();
};

export const articleFindAll = async () => {
  const response = await sendRequest(
    "api/article"
  );

  return response.json();
};
