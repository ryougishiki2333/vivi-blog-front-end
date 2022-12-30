import { createSlice } from '@reduxjs/toolkit'
// import { ITag } from "../types/dataType"

export const tagReducer = createSlice({
  name: 'counter',
  initialState: {
    value: [
        {name: "miaomiaomiao", check:true},
        {name: "gugugu", check:false}
    ]
  },
  reducers: {
    addTag: state => {
    //   state.value += 1
    },
    deleteTag: state => {
    //   state.value -= 1
    },
    changeArticleTag: (state, action) => {
    //   state.value += action.payload
    }
  }
})

export const { addTag, deleteTag, changeArticleTag } = tagReducer.actions

export default tagReducer.reducer