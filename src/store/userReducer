import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/dataType";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    value: { token: "", userId: "", id: "", type: 0, avatar: ""} as IUser,
  },
  reducers: {
    logIn: (state, action) => {
      state.value = {...action.payload}
    },
    logOut: (state, action) => {
      state.value = { token: "", userId: "", id: "", type: 0, avatar: ""}
    },
    // editTag: (state, action) => {},
  },
});

export const { logIn, logOut } = userReducer.actions;

export default userReducer.reducer;
