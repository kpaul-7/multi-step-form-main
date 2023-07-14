import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  phone: "",
  status: false,
};
const personalSlice = createSlice({
  name: "personalSlice",
  initialState,
  reducers: {
    saveData(state, action) {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.username = action.payload.username;
      state.status = true;
    },
  },
});

export default personalSlice.reducer;

export const { saveData } = personalSlice.actions;
