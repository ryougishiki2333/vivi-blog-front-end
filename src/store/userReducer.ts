import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/dataType";

const initialUser = {
  token: localStorage.getItem("token"),
  username: localStorage.getItem("username"),
  type: parseInt(localStorage.getItem("type")||'0'),
  avatar: localStorage.getItem("avatar"),
  displayName: localStorage.getItem("displayName"),
  id: parseInt(localStorage.getItem("id")||'0')
};


export const userReducer = createSlice({
  name: "user",
  initialState: {
    value: initialUser as IUser,
  },
  reducers: {
    logIn: (state, action) => {
      console.log(action.payload);
      state.value = {
        token: "",
        username: action.payload.username,
        type: action.payload.type,
        avatar: "",
        displayName: action.payload.username,
        id: action.payload.id,
      };
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("token", "");
      localStorage.setItem("type", action.payload.type);
      localStorage.setItem("displayName", action.payload.username);
      localStorage.setItem("avatar", "");
      localStorage.setItem("username", action.payload.username);
    },
    logOut: (state, action) => {
      // state.value = { token: "", username: "", type: 0, avatar: "", displayName:''}
    },
    // editTag: (state, action) => {},
  },
});

export const { logIn, logOut } = userReducer.actions;

export default userReducer.reducer;
