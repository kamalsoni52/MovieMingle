import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authorizationToken = process.env.REACT_APP_Authorization_Token;

const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/",
    credential: "include",
    accept: "application/json",
    prepareHeaders : (headers) => {
        headers.set("Authorization", `Bearer ${authorizationToken}`)
        return headers
    }
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: bulider => ({})
})