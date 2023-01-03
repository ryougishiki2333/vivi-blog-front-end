import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../types/dataType";

export const articleReducer = createSlice({
  name: "article",
  initialState: {
    value: [
      {
        title: "test1",
        content: "<p>test1</p>",
        tag: [
          { name: "miaomiaomiao", check: true },
          { name: "gugugu", check: false },
        ],
        articleState:0,
        id:'123123'
      },
      {
        title: "test2",
        content: "<p>test2</p>",
        tag: [
          { name: "miaomiaomiao", check: true },
          { name: "gugugu", check: false },
        ],
        articleState:1,
        id:'12341231123'
      },
    ] as IArticle[],
  },
  reducers: {
    saveArticle: (state) => {
      //   state.value += 1
    },
    deleteArticle: (state) => {
      //   state.value -= 1
    },
  },
});

export const { } = articleReducer.actions;

export default articleReducer.reducer;
