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
        articleState:0
      },
    ] as IArticle[],
  },
  reducers: {
    addTag: (state) => {
      //   state.value += 1
    },
    deleteTag: (state) => {
      //   state.value -= 1
    },
  },
});

export const { addTag, deleteTag } = articleReducer.actions;

export default articleReducer.reducer;
