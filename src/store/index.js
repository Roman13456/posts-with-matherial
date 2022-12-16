import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/posts.reducers'

export const store = configureStore({
  reducer: {
    POSTS: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
}),
})