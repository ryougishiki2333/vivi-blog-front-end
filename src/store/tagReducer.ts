import { createSlice } from "@reduxjs/toolkit";
import { ITag } from "../types/dataType";

export const tagReducer = createSlice({
  name: "tag",
  initialState: {
    value: [
      
    ] as ITag[],
  },
  reducers: {
    getTags:(state, action) =>{
      state.value = action.payload
    },
    addTag: (state, action) => {},
    deleteTag: (state, action) => {},
    editTag: (state, action) => {},
  },
});

export const { addTag, deleteTag } = tagReducer.actions;

export default tagReducer.reducer;
