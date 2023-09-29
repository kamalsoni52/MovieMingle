import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        authentication: builder.query({
            query: () =>"/3/authentication"
        })
    })
})

export const { useAuthenticationQuery } = authApiSlice