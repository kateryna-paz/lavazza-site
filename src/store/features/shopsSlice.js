import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { ref, get } from "firebase/database";

const initialState = {
  shops: [],
  isLoading: false,
  error: null,
};

export const fetchShops = createAsyncThunk("shops/fetchShops", async () => {
  try {
    const shopsref = ref(db, "coffee-shop/shops");
    const snapshot = await get(shopsref);

    if (snapshot.exists()) {
      const data = snapshot.val();

      const shops = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      return shops;
    } else {
      return "No data available at the specified path.";
    }
  } catch (err) {
    throw new Error(`Error fetching categories: ${err.message}`);
  }
});

export const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shops = action.payload;
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default shopsSlice.reducer;
