import { createSlice } from '@reduxjs/toolkit'
import { IArticle } from "../types/dataType"

export const articleReducer = createSlice({
  name: 'counter',
  initialState: {
    value: [
        
    ] as IArticle[]
  },
  reducers: {
    addTag: state => {
    //   state.value += 1
    },
    deleteTag: state => {
    //   state.value -= 1
    },

  }
})

export const { addTag, deleteTag } = articleReducer.actions

export default articleReducer.reducer