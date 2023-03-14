import {createSlice} from '@reduxjs/toolkit'
import {Post} from "@/types/Post";
import type {PayloadAction} from '@reduxjs/toolkit'


export type PostsState = {
    posts: Array<Post>
}

const initialState: PostsState = {
    posts: []
}

export const postSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        savePosts: (state, action: PayloadAction<Array<Post>>) => {
            state.posts = action.payload;
        },
        removePostById: (state, action: PayloadAction<Number>) => {
            state.posts = state.posts.filter(({id}) => action.payload !== id
            )
        }
    },
});

export const {savePosts, removePostById} = postSlice.actions

