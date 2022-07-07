import { createSlice, current } from "@reduxjs/toolkit";

const featuresSlice = createSlice({
  name: "Features Slice",
  initialState: {
    isMenuOpen: false,
    isSearchOpen: false,
    isLoading: false,
    isDropdownFilmOpen: false,
    isDropdownTVOpen: false,
    currentPage: {
      movies: {
        popular: 1,
        topRated: 1,
        upcoming: 1,
        nowPlaying: 1,
      },
      tvShows: {
        popular: 1,
        topRated: 1,
        onAir: 1,
        airingToday: 1,
      },
    },
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
    setMoviesCurrentPage(state, action) {
      const { pageNum, type } = action.payload;

      state.currentPage.movies[type] = pageNum;
    },
    setTVShowsCurrentPage(state, action) {
      const { pageNum, type } = action.payload;

      state.currentPage.tvShows[type] = pageNum;
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
  setMoviesCurrentPage,
  setTVShowsCurrentPage,
} = featuresSlice.actions;

export default featuresReducer;
export {
  openMenu,
  openSearch,
  setIsLoading,
  setIsDropdownFilmOpen,
  setIsDropdownTvOpen,
  setMoviesCurrentPage,
  setTVShowsCurrentPage,
};
