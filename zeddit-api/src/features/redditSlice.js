import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (inputs) => {
        const {selectedSubreddit, filter} = inputs;
        const res = await fetch(`https://www.reddit.com/${selectedSubreddit}/${filter}.json`)
        const json = await res.json()
        return json.data.children.map(subreddit => subreddit.data)
    }
)


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        filter: '',
        selectedSubreddit: 'r/animals',
    },
    reducers: {
       addPosts: (state, {payload}) => {
        state.posts = payload;
       },
       setFilter(state, action) {
        state.filter = action.payload
    },
    setSelectedSubreddit(state, action) {
        state.selectedSubreddit = action.payload;
    }
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = false;
        })
        builder.addCase(getPosts.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export const {getAllPosts} = state => state.posts.posts;
export const selectSelectedSubreddit = state => state.posts.selectedSubreddit;
export default postsSlice.reducer;
export const { addPosts, setFilter, setSelectedSubreddit } = postsSlice.actions;


