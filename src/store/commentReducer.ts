import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../types/dataType";

export const commentReducer = createSlice({
  name: "comment",
  initialState: {
    value: [
      {
        id: 30,
        content: "我的胸好大好好揉！",
        username: "miaomiaomiao",
        displayName: "喵喵喵",
        state: 1,
        articleId: 12341231123,
        updatedAt: new Date("2023-07-31T09:37:18.000Z"),
        userId:0,
        email:"0013",
        replyUserId: 2,
      },
      {
        id: 19,
        content: "我的也是！",
        state: 1,
        articleId: 12341231123,
        replyUserId: 1,
        updatedAt: new Date("2023-07-31T09:37:18.000Z"),
        username: "12312",
        userId:0,
        email:"0013"
      },
      {
        id: 13,
        content: "给我揉揉！",
        state: 1,
        articleId: 12341231123,
        replyUserId: 0,
        updatedAt: new Date("2023-07-31T09:37:18.000Z"),
        username: "1231213",
        userId:0,
        email:"0013"
      },
    ] as IComment[],
  },
  reducers: {
    addComment: (state, action) => {},
  },
});

export const { addComment } = commentReducer.actions;

export default commentReducer.reducer;
