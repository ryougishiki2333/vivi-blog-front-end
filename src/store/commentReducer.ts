import { createSlice } from "@reduxjs/toolkit";
import { ITag } from "../types/dataType";

export const tagReducer = createSlice({
  name: "tag",
  initialState: {
    value: [
      { name: "miaomiaomiao", id: "123123" },
      { name: "gugugu", id: "1234" },
    ] as ITag[],
  },
  reducers: {
    addTag: (state, action) => {},
    deleteTag: (state, action) => {},
    editTag: (state, action) => {},
  },
});

export const { addTag, deleteTag } = tagReducer.actions;

export default tagReducer.reducer;
