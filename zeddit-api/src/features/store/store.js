import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../redditSlice';
import subredditsReducer from '../subredditSlice';
import searchReducer from '../searchSlice';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    search: searchReducer,
  },
});