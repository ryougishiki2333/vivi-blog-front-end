import { sendRequest, baseURL } from "./request";

// const token = window.localStorage.getItem('token')

export const tagCreate = async (name: string): Promise<any> => {
  const tag = { name: name};
  const response = await sendRequest("api/tag/create", {
    method: "POST",
    body: JSON.stringify(tag),
  });
  return response.json();
};

export const tagDelete = async (id: number): Promise<any> => {
  const response = await sendRequest("api/tag?id=" + id.toString(), {
    method: "DELETE",
  });
  return response.json();
};

export const tagFindAll = async () => {
  const response = await sendRequest("api/tag/get/all");

  return response.json();
};
