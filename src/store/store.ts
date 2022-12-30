import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./feature/userSlice/userSlice";
import searchReducer from "./feature/searchSlice/searchSlice";
import moviesReducer from "./feature/moviesCardSlice/movieCardsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
