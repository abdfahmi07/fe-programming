import { createSlice } from "@reduxjs/toolkit";

const featuresSlice = createSlice({
  name: "Features Slice",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    openMenu(state, action) {
      state.isMenuOpen = action.payload;
    },
  },
});

const featuresReducer = featuresSlice.reducer;
const { openMenu } = featuresSlice.actions;

export default featuresReducer;
export { openMenu };
