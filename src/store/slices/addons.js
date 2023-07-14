import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addons: [],
};

const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    saveAddons(state, action) {
      state.addons = action.payload;
    },
  },
});

export const { saveAddons } = addonsSlice.actions;
export default addonsSlice.reducer;
