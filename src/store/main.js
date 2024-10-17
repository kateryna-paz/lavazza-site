import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import shopsSlice from "./features/shopsSlice";
import categoryProductsSlice from "./features/categoryProductsSlice";
import registerReducer from "../auth/registerReducer";
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    shops: shopsSlice,
    categoryProducts: categoryProductsSlice,
    register: registerReducer,
    auth: authReducer,
  },
});

export default store;
