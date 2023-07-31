import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../redditSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});