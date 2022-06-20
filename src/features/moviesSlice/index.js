import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constant/data";

/**
 * Buat slice : generate action dan reducer
 * menerima params object: name, initialState, reducers
 */

const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    deleteMovie() {},
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

/**
 * generate action dan reducer
 * nama action diambil dari nama reducer
 * action untuk menjalankan reducer
 * reducer untuk meng-update state
 */

const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie, updateMovies } = moviesSlice.actions;

export default moviesReducer;
export { addMovie, deleteMovie, updateMovies };
