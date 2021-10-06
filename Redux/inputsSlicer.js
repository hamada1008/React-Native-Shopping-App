import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const inputsSlicer = createSlice({
  name: "product Editor",
  initialState,
  reducers: {
    setFields: (state, action) => {
      switch (Object.keys(action.payload)[0]) {
        case "title":
          state.title = action.payload.title;
          break;
        case "price":
          state.price = action.payload.price;
          break;
        case "description":
          state.description = action.payload.description;
          break;
        case "imageUrl":
          state.imageUrl = action.payload.imageUrl;
          break;
        default:
      }
    },
    resetFields: (state) => (state = initialState),
    setType: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { setFields, resetFields, setType } = inputsSlicer.actions;
export default inputsSlicer.reducer;
