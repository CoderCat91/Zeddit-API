import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (inputs) => {
        const {selectedSubreddit, filter} = inputs;
        const res = await fetch(`https://www.reddit.com/r/${selectedSubreddit}/${filter}.json`)
        const json = await res.json()
        return json.data.children.map(subreddit => subreddit.data)
    }
)


export const getComments = createAsyncThunk(
    'posts/getComments',
    async (permalink) => {
        const res = await fetch(`https://www.reddit.com${permalink}.json`)
        const json = await res.json()
        return json[1].data.children.map(comments => comments.data)
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        filter: '',
        selectedSubreddit: 'animals',
        comments: [],
        searchTerm: ''

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
    },
    setSearchTerm(state, action) {
        state.searchTerm = action.payload;
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
        builder.addCase(getComments.pending, (state) =>{
            state.commentsIsLoading = true;
            state.commentsIsError = false;
        })
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.commentsIsLoading = false;
            state.commentsIsError = false;
        })
        builder.addCase(getComments.rejected, (state) => {
            state.commentsIsLoading = false;
            state.commentsIsError = true;
        })
    }
})

export const {getAllPosts} = state => state.posts.posts;
export const selectSelectedSubreddit = state => state.posts.selectedSubreddit;
export default postsSlice.reducer;
export const { addPosts, setFilter, setSelectedSubreddit, setSearchTerm } = postsSlice.actions;
export const selectComments = state => state.posts.comments;
export const selectSearchTerm =  state => state.posts.searchTerm;
