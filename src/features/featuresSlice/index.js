import { createSlice } from "@reduxjs/toolkit";

const featuresSlice = createSlice({
  name: "Features Slice",
  initialState: {
    isMenuOpen: false,
    isSearchOpen: false,
    isLoading: false,
    isDropdownFilmOpen: false,
    isDropdownTVOpen: false,
    currentPage: 1,
  },
  reducers: {
    openMenu(state, action) {
      state.isMenuOpen = action.payload;
    },
    openSearch(state, action) {
      state.isShowSearch = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsDropdownFilmOpen(state, action) {
      state.isDropdownFilmOpen = action.payload;
    },
    setIsDropdownTvOpen(state, action) {
      state.isDropdownTVOpen = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

const featuresReducer = featuresSlice.reducer;
const {
  openMenu,
  openSearch,
  setIsLoading,
  setIsDropdownFilmOpen,
  setIsDropdownTvOpen,
  setCurrentPage,
} = featuresSlice.actions;

export default featuresReducer;
export {
  openMenu,
  openSearch,
  setIsLoading,
  setIsDropdownFilmOpen,
  setIsDropdownTvOpen,
  setCurrentPage,
};
