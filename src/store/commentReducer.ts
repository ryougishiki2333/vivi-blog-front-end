import { createSlice } from "@reduxjs/toolkit";
import { IComment } from "../types/dataType";

export const commentReducer = createSlice({
  name: "comment",
  initialState: {
    value: [

    ] as IComment[],
  },
  reducers: {
    getReplys:(state, action) =>{
      state.value = action.payload
      console.log(state.value, "reply");
    },
    addComment: (state, action) => {},
  },
});

export const { addComment } = commentReducer.actions;

export default commentReducer.reducer;
