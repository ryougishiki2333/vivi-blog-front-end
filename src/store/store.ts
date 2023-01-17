import { configureStore } from '@reduxjs/toolkit'
import tagReducer from './tagReducer'
import articleReducer from './articleReducer'
import globalTextReducer from './globalTextReducer'

export const store = configureStore({
  reducer: {
    tag: tagReducer,
    article: articleReducer,
    globalText: globalTextReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch