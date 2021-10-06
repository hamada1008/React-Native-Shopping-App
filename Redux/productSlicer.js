import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../constants/166 dummy-data";

const initialState = PRODUCTS;

const productSlicer = createSlice({
  name: "ProductEditor",
  initialState,
  reducers: {
    removeProduct: (state, action) =>
      state.filter((el) => el.id !== action.payload.id),

    addNewProduct: (state, action) => {
      if (state.findIndex((el) => el.id === action.payload.id) === -1) {
        state.push({ ownerID: "u1", id: Math.random(), ...action.payload });
      } else {
        const nstate = state.splice(
          state.findIndex((el) => el.id == action.payload.id),
          1,
          {
            ...state.find((el) => el.id === action.payload.id),
            ...action.payload,
          }
        );
      }
    },
  },
});

export const { removeProduct, addNewProduct, updateProduct } =
  productSlicer.actions;
export default productSlicer.reducer;
