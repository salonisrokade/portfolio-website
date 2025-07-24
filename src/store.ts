import { configureStore } from "@reduxjs/toolkit";
import goalsSlice from "./components/goals/duck/goalsSlice";

export const store = configureStore({
    reducer:{
        goals: goalsSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch