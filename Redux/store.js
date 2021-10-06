import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlicer";
import orderReducer from "./ordersSlicer";
import productReducer from "./productSlicer";
import inputReducer from "./inputsSlicer";
const store = configureStore({
  reducer: { cartReducer, orderReducer, productReducer, inputReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
