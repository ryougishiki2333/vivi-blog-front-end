import { configureStore } from '@reduxjs/toolkit'
import tagReducer from './tagReducer'
import articleReducer from './articleReducer'

export const store = configureStore({
  reducer: {
    tag: tagReducer,
    article: articleReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch