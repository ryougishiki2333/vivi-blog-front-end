import { createSlice } from "@reduxjs/toolkit";
import { ITag } from "../types/dataType";
import { IScore } from "../types/dataType";

export const scoreReducer = createSlice({
  name: "score",
  initialState: {
    value: [
      {
        id: '12312312312',
        score: 3,
        articleId: "12341231123"
      }
      // { name: "miaomiaomiao", id: "123123" },
      // { name: "gugugu", id: "1234" },
    ] as IScore[],
  },
  reducers: {
    // addTag: (state, action) => {},
    // deleteTag: (state, action) => {},
    // editTag: (state, action) => {},
  },
});

export const {  } = scoreReducer.actions;

export default scoreReducer.reducer;
