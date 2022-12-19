import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload);
    },
    remove: (state, action) => {
      return state.cart.filter((item) => action.payload !== item.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
