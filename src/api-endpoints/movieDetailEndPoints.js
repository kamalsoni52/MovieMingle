import { apiSlice } from "../api/apiSlice";

export const movieDetailApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        movieDetail: builder.query({
            query: (movieId) =>`/3/movie/${movieId}?language=en-US`,
            keepUnusedDataFor: 0,
        })
    })
})

export const { useMovieDetailQuery } = movieDetailApiSlice