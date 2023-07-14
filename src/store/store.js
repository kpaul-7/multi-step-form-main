import { configureStore } from "@reduxjs/toolkit";

import personalSlice from "./slices/personal";
import planSlice from "./slices/plan";
import addonsSlice from "./slices/addons";

const store = configureStore({
  reducer: {
    personal: personalSlice,
    plan: planSlice,
    addons: addonsSlice,
  },
});

export default store;
