const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  plan: { type: "", name: "", price: "" },
};
const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    savePlan(state, action) {
      state.plan = { ...action.payload };
    },
  },
});

export const { savePlan } = planSlice.actions;
export default planSlice.reducer;
