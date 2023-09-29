import { apiSlice } from "../api/apiSlice";

export const moviesSearchApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        search: builder.query({
            query: (searchQuery) =>`/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US`,
            keepUnusedDataFor: 0,
        })
    })
})

export const { useSearchQuery } = moviesSearchApiSlice