import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        list: [],
    },
    reducers:{
      
        setMovies : (state, action) =>{
            
            state.list = action.payload
        },
        reset: (state, action) => {
            state.list = []
        }
    },
    
})

export const { setMovies, reset, setLoading} = movieSlice.actions
export const movieState = (state) => state.movies.list
export default movieSlice.reducer