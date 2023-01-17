import { createSlice } from "@reduxjs/toolkit";
import { ITag, ITextReducer } from "../types/dataType";

export const globalTextReducer = createSlice({
  name: "globalText",
  initialState: {
    value: {
      billBoard: "1231231231231231312",
      usefulLink: [
        { name: "MtF.wiki", url: "https://mtf.wiki/zh-cn/" },
        {
          name: "柑橘与百合Citrus&Lilium",
          url: "https://www.youtube.com/channel/UCgfr45LK6VTcuuMVBHsiNnQ",
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
