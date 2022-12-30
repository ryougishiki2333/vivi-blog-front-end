import { configureStore } from '@reduxjs/toolkit'
import tagReducer from './tagReducer'
import blogReducer from './blogReducer'

export const store = configureStore({
  reducer: {
    tag: tagReducer,
    // blog: blogReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch