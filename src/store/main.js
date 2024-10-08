import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import shopsSlice from "./features/shopsSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    shops: shopsSlice,
  },
});

export default store;
