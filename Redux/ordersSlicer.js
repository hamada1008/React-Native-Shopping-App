import { createSlice } from "@reduxjs/toolkit";
const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
const initialState = [];

const ordersSlicer = createSlice({
  name: "orders",
  initialState,
  reducers: {
    dispatchOrder: (state, action) => {
      state.push({
        cartContent: [...action.payload],
        order_id: Math.random(),
        date: new Date().toLocaleDateString("en-US", options),
        isShown: false,
      });
    },
    toggleDetails: (state, action) => {
      var ShowOrNot = state.find((el) => el.order_id === action.payload.id);
      // const nstate = state.splice(
      //   state.findIndex((el) => el.order_id == action.payload.id),
      //   1,
      //   {
      //     ...state.find((el) => el.order_id === action.payload.id),
      //     isShown: !ShowOrNot.isShown,
      //   }
      // );
      // const nstate = state.filter((el) => el.order_id === action.payload.id);
      state.forEach((el) => {
        if (el.order_id === action.payload.id) {
          el.isShown = !ShowOrNot.isShown;
        }
      });
    },
  },
});

export const { dispatchOrder, toggleDetails } = ordersSlicer.actions;
export default ordersSlicer.reducer;
