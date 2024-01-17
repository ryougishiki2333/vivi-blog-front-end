
import { sendRequest, baseURL } from "./request";
import { ITag } from "src/types/dataType";

type articleCreateRes = {
  title:string;
  content:string;
  synopsis: string
  tags:Array<ITag>
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

export const articleUpdate = async (
  article:articleCreateRes, id:number
): Promise<any> => {
  const response = await sendRequest(`api/article?id=`+(id.toString()), {
    method: "PUT",
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
    "api/article/get/all"
  );

  return response.json();
};


