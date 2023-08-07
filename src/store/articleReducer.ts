import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../types/dataType";
import { nanoid } from "@reduxjs/toolkit";
import { testString } from "./testString";

const date = new Date("2023-07-31T09:37:18.000Z")

export const articleReducer = createSlice({
  name: "article",
  initialState: {
    value: [
      {
        title: "test0",
        content: `<p>13123123123</p>`,
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 0,
        id: "123",
        coverPicture:'',
        synopsis:"123123123132",
        createdAt:date,
        updatedAt:date
      },
      {
        title: `The seven day of best`,
        content: testString,
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 1,
        id: "1234",
        coverPicture:'',
        synopsis:"123123123132",
        createdAt:date,
        updatedAt:date
      },
      {
        title: "test11",
        content: "<p>test1345</p>",
        tag: [
          { name: "gugugu", id: "1234" },
        ],
        articleState: 1,
        id: "12341",
        coverPicture:'',
        synopsis:"123123123132",
        createdAt:date,
        updatedAt:date
      },
      {
        title: "test111",
        content: "<p>test1456</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
        ],
        articleState: 1,
        id: "1234123",
        coverPicture:'',
        synopsis:"123123123132",
        createdAt:date,
        updatedAt:date
      },
      {
        title: "test1111",
        content: "<p>test1567</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 1,
        id: "12",
        coverPicture:'',
        synopsis:"123123123132",
        createdAt:date,
        updatedAt:date
      },
      {
        title: "test11111",
        content: "<p>test178978</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 1,
        id: "123333",
        coverPicture:'',
        synopsis:"123123123132",
        createdAt:date,
        updatedAt:date
      },
      {
        title: "test2",
        content: "<p>test290345903456</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 2,
        id: "1234123112311",
        coverPicture:'',
        synopsis:"123123123132",
        createdAt:date,
        updatedAt:date
      },
      {
        title: "test3",
        content: "<p>test3345345345</p>",
        tag: [
          { name: "miaomiaomiao", id: "123123" },
          { name: "gugugu", id: "1234" },
        ],
        articleState: 3,
        id: "12341231123123",
        coverPicture:'',
        synopsis:"123123123132",
        createdAt:date,
        updatedAt:date
      },
    ] as IArticle[],
  },
  reducers: {
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
