import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import shopsSlice from "./features/shopsSlice";
import categoryProductsSlice from "./features/categoryProductsSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    shops: shopsSlice,
    categoryProducts: categoryProductsSlice,
  },
});

export default store;
