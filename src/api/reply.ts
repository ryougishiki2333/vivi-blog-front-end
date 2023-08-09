import { sendRequest } from "./request";

type reply = {
  content: string,
  username: string,
  state: number,
  replyUserId: number,
  userId: number,
  articleId: number,
};

export const replyCreate = async (
  reply:reply
): Promise<any> => {
  const response = await sendRequest("http://localhost:4000/api/reply", {
    method: "POST",
    body: JSON.stringify(reply),
  });
  return response.json();
};


export const replyFindReplyByArticleId = async (
  id:string
): Promise<any> => {
  const response = await sendRequest("http://localhost:4000/api/reply?id="+(id.toString()))
  return response.json();
};





// export const userRegister = async (username: string, password: string, email:string) => {
//   const response = await sendRequest(
//     "http://localhost:4000/api/user/register",
//     {
//       method: "POST",
//       body: JSON.stringify({ username, password, email }),
//     }
//   );

//   return response.json();
// };
