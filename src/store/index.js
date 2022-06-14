import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";
import featuresReducer from "../features/featuresSlice";
/**
 * Buat store
 * Digunakan membuat state global
 * Menyimpan reducer sebelumnya
 * Menerima params object: reducer
 */

const store = configureStore({
  reducer: {
    moviesReducer,
    featuresReducer,
  },
});

// Export store
export default store;
