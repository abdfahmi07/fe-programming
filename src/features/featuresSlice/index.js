import { createSlice } from "@reduxjs/toolkit";

const featuresSlice = createSlice({
  name: "Features Slice",
  initialState: {
    isMenuOpen: false,
    isSearchOpen: false,
    isLoading: false,
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
  },
});

const featuresReducer = featuresSlice.reducer;
const { openMenu, openSearch, setIsLoading } = featuresSlice.actions;

export default featuresReducer;
export { openMenu, openSearch, setIsLoading };
