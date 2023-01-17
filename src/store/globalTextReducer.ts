import { createSlice } from "@reduxjs/toolkit";
import { ITag, ITextReducer } from "../types/dataType";

export const globalTextReducer = createSlice({
  name: "globalText",
  initialState: {
    value: {
      billboard: '1231231231231231312'
    } as ITextReducer,
  },
  reducers: {
    changeGlobalText: (state, action) => {},
  },
});

export const { changeGlobalText } = globalTextReducer.actions;

export default globalTextReducer.reducer;
