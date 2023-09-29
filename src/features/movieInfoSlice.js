import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
    name: "movieInfo",
    initialState: {
        id: "",
        details: {}, 
    },
    reducers:{
      
        setId : (state, action) =>{            
            state.id = action.payload
        },
        setDetail: (state,action) =>{
            state.details = action.payload
        },
        resetMovieInfo: (state, action) => {
            state.id = ""
            state.details = {}
        }
    },
    
})

export const { setId, resetMovieInfo, setDetail} = movieInfoSlice.actions
export const movieId= (state) => state.movieInfo.id;
export const movieDetails = (state) => state.movieInfo.details
export default movieInfoSlice.reducer