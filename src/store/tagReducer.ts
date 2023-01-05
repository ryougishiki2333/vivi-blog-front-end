import { createSlice } from '@reduxjs/toolkit'
import { ITag } from "../types/dataType"

export const tagReducer = createSlice({
  name: 'tag',
  initialState: {
    value: [
        "miaomiaomiao","gugugu"
    ] as ITag[]
  },
  reducers: {
    addTag: state => {
    //   state.value += 1
    },
    deleteTag: state => {
    //   state.value -= 1
    },
    // changeTagCheck: (state, action) => {
    //   state.value.forEach((tag)=>{if (tag.name === action.payload) {
    //     tag.check = !tag.check
    //   }})
    // }
  }
})

export const { addTag, deleteTag } = tagReducer.actions

export default tagReducer.reducer