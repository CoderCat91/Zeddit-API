import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../redditSlice';
import subredditsReducer from '../subredditSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer
  },
});