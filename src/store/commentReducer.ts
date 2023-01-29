import { createSlice } from "@reduxjs/toolkit";
import { IMotherComment } from "../types/dataType";

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
        timestamp: 1231231231231,
        userId: "sadfasdfsad",
        children: [
          {
            id: "dfgsdfgsdfgsdfgds",
            content: "我的也是！",
            userId: "sadfasdfsad123123",
            state: 1,
            articleId: "12341231123",
            replyUserId: "",
            timestamp: 1231231231232,
            username: "12312",
            displayName: "游客账号114",
          },
          {
            id: "dfgsdfgsdfgsdfgds123",
            content: "给我揉揉！",
            userId: "sadfasdfsad12312323",
            state: 1,
            articleId: "12341231123",
            replyUserId: "sadfasdfsad",
            replyDisplayName:"游客账号114",
            timestamp: 1231231231232,
            username: "1231213",
            displayName: "游客账号514",
          },
        ],
      },
    ] as IMotherComment[],
  },
  reducers: {
    addComment: (state, action) => {},
  },
});

export const { addComment } = commentReducer.actions;

export default commentReducer.reducer;
