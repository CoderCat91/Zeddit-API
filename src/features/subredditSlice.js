import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSubReddits = createAsyncThunk(
    'subreddits/getSubreddits',
    async () => {
        const res = await fetch(`https://www.reddit.com/subreddits.json`);
        const json = await res.json();
        return json.data.children.map((subreddit) => subreddit.data)
    }
)


const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: true,
        error: false
    },
    reducers: {
        addSubReddits: (state, {payload}) => {
            state.posts = payload;
           }
    },
    extraReducers: (builder) => {
        builder.addCase(getSubReddits.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        builder.addCase(getSubReddits.fulfilled, (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.error = false;
        })
        builder.addCase(getSubReddits.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export const {getAllSubReddits} = state => state.subreddits.subreddits;
export default subredditSlice.reducer;
export const {addSubReddits} = subredditSlice.actions;

