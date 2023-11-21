import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import tokenReducer from "./slices/tokenSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux";
export function makeStore() {
    return configureStore({
        reducer: {
             userReducer,
             token:tokenReducer
        }
    })
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;