import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    updateTotalPrice: (state, action) => {
      const nstate = state.splice(
        state.findIndex((el) => el.id == action.payload.id),
        1,
        {
          ...state.find((el) => el.id === action.payload.id),
          tprice: (
            Number(action.payload.quantity) *
            Number(state.find((el) => el.id === action.payload.id).price)
          ).toFixed(2),
        }
      );
    },
    resetCart: (state) => (state = initialState),
  },
});

export const { addToCart, removeFromCart, updateTotalPrice, resetCart } =
  cartSlicer.actions;
export default cartSlicer.reducer;
