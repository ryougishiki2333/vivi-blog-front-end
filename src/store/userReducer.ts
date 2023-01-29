import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/dataType";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    value: { token: "", username: "", id: "", type: 0, avatar: "", displayName:''} as IUser,
  },
  reducers: {
    logIn: (state, action) => {
      state.value = {...action.payload, displayName:'喵喵喵'}
    },
    logOut: (state, action) => {
      state.value = { token: "", username: "", id: "", type: 0, avatar: "", displayName:''}
    },
    // editTag: (state, action) => {},
  },
});

export const { logIn, logOut } = userReducer.actions;

export default userReducer.reducer;
