import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doc:[]
}

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers: {
        setMovies: (state,action)=>{
            state.doc = action.payload;
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.doc;

export default movieSlice.reducer;