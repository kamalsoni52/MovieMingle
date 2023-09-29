import  {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import moviesReducer from "./features/movieSlice";
import movieInfoReducer from "./features/movieInfoSlice";
export const store = configureStore({
    reducer:{
        movies: moviesReducer,
        movieInfo: movieInfoReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})