import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {postSlice} from "./postsSlice"

export const store = configureStore({
    reducer: postSlice.reducer
})

type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


