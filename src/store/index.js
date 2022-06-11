import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

/**
 * Buat store
 * Digunakan membuat state global
 * Menyimpan reducer sebelumnya
 * Menerima params object: reducer
 */

const store = configureStore({
  reducer: {
    moviesReducer,
  },
});

// Export store
export default store;
