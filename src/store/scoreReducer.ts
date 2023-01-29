import { createSlice } from "@reduxjs/toolkit";
import { IScore } from "../types/dataType";

export const scoreReducer = createSlice({
  name: "score",
  initialState: {
    value: [
      {
        id: '12312312312',
        score: 3,
        articleId: "12341231123",
        userId:'123'
      }
      // { name: "miaomiaomiao", id: "123123" },
      // { name: "gugugu", id: "1234" },
    ] as IScore[],
  },
  reducers: {
    addScore: (state, action) => {},
    // deleteTag: (state, action) => {},
    // editTag: (state, action) => {},
  },
});

export const { addScore } = scoreReducer.actions;

export default scoreReducer.reducer;
