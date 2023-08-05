import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../types/dataType";

export const commentReducer = createSlice({
  name: "comment",
  initialState: {
    value: [
      {
        id: "dfgdfgsdfg",
        content: "我的胸好大好好揉！",
        username: "miaomiaomiao",
        displayName: "喵喵喵",
        state: 1,
        articleId: "12341231123",
        updatedAt: new Date("2023-07-31T09:37:18.000Z"),
        userId:"0",
        email:"0013"
      },
      {
        id: "dfgsdfgsdfgsdfgds",
        content: "我的也是！",
        state: 1,
        articleId: "12341231123",
        replyUserId: "",
        updatedAt: new Date("2023-07-31T09:37:18.000Z"),
        username: "12312",
        userId:"0",
        email:"0013"
      },
      {
        id: "dfgsdfgsdfgsdfgds123",
        content: "给我揉揉！",
        state: 1,
        articleId: "12341231123",
        replyUserId: "sadfasdfsad",
        updatedAt: new Date("2023-07-31T09:37:18.000Z"),
        username: "1231213",
        userId:"0",
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
