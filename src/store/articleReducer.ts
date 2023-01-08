import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../types/dataType";

export const articleReducer = createSlice({
  name: "article",
  initialState: {
    value: [
      {
        title: "test0",
        content: "<p>test0</p>",
        tag: [
          "miaomiaomiao","gugugu"
        ],
        articleState:0,
        id:'123123'
      },
      {
        title: "test1",
        content: "<p>test1</p>",
        tag: [
          "miaomiaomiao","gugugu"
        ],
        articleState:1,
        id:'12341231123'
      },
      {
        title: "test2",
        content: "<p>test2</p>",
        tag: [
          "miaomiaomiao","gugugu"
        ],
        articleState:2,
        id:'1234123112311'
      },
      {
        title: "test3",
        content: "<p>test3</p>",
        tag: [
          "miaomiaomiao","gugugu"
        ],
        articleState:3,
        id:'12341231123123'
      },
    ] as IArticle[],
  },
  reducers: {
    deleteA: (state, action) => {
      // 改state,草稿不显示
      console.log(action.payload);
    },
    publishA: (state, action) => {
      console.log(action.payload);
      // 如果是草稿,则在发布区新增
      // 如果已经有id,则直接替换同id内容,并改state
    },
    archiveA: (state, action)=>{
      // 改state,草稿不显示 
      console.log(action.payload);
    },
    saveA: (state, action) => {
      // 如果是草稿,则在草稿箱新增
      // 如果已经有id,则直接替换同id内容
      console.log(action.payload);
    },
  },
});

export const { deleteA,publishA,archiveA,saveA } = articleReducer.actions

export default articleReducer.reducer;
