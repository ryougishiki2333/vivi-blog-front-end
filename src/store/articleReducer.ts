import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../types/dataType";
import { nanoid } from "@reduxjs/toolkit";
import { testString } from "./testString";

const date = new Date("2023-07-31T09:37:18.000Z")

export const articleReducer = createSlice({
  name: "article",
  initialState: {
    value: [
    ] as IArticle[],
  },
  reducers: {
    getArticles:(state, action) =>{
      state.value = action.payload
      console.log(state.value, "article");
      
    },



    saveA: (state, action) => {
      // 如果是草稿,则在草稿箱新增
      // 如果已经有id,则直接替换同id内容
      if (!action.payload.id) {
        action.payload.id = nanoid();
        state.value.push({ ...action.payload, articleState: 0 });
      } else {
        state.value.forEach((item) => {
          if (action.payload.id === item.id) {
            item.content = action.payload.content;
            item.title = action.payload.title;
            item.tag = action.payload.tag;
          }
        });
      }
    },
    publishA: (state, action) => {
      // 如果是草稿,则在发布区新增
      // 如果已经有id,则直接替换同id内容,并改state
      if (!action.payload.id) {
        action.payload.id = nanoid();
        state.value.push({ ...action.payload, articleState: 1 });
      } else {
        state.value.forEach((item) => {
          if (action.payload.id === item.id) {
            item.content = action.payload.content;
            item.title = action.payload.title;
            item.tag = action.payload.tag;
            item.articleState = 1;
          }
        });
      }
    },
    deleteA: (state, action) => {
      // 改state,草稿不显示

      state.value.forEach((item) => {
        if (action.payload.id === item.id) {
          item.content = action.payload.content;
          item.title = action.payload.title;
          item.tag = action.payload.tag;
          item.articleState = 2;
        }
      });
    },
    archiveA: (state, action) => {
      // 改state,草稿不显示
      state.value.forEach((item) => {
        if (action.payload.id === item.id) {
          item.content = action.payload.content;
          item.title = action.payload.title;
          item.tag = action.payload.tag;
          item.articleState = 3;
        }
      });
    },
  },
});

export const { deleteA, publishA, archiveA, saveA } = articleReducer.actions;

export default articleReducer.reducer;
