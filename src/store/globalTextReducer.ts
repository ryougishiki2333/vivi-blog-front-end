import { createSlice } from "@reduxjs/toolkit";
import { ITag, ITextReducer } from "../types/dataType";

export const globalTextReducer = createSlice({
  name: "globalText",
  initialState: {
    value: {
      billBoard: "My blog is compoleted now!",
      usefulLink: [
        { name: "Leetcode", url: "https://leetcode.com/" },
        {
          name: "Pixiv",
          url: "https://www.pixiv.net/",
        },
      ],
      otherLink: [
        { name: "MtF.wiki", url: "https://mtf.wiki/zh-cn/" },
        {
          name: "柑橘与百合Citrus&Lilium",
          url: "https://www.youtube.com/channel/UCgfr45LK6VTcuuMVBHsiNnQ",
        },
      ],
    } as ITextReducer,
  },
  reducers: {
    changeGlobalText: (state, action) => {},
  },
});

export const { changeGlobalText } = globalTextReducer.actions;

export default globalTextReducer.reducer;
