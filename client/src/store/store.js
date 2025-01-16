import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/index";
import adminProductsSlice from "./admin/products-slice";
import shoppingProductsSlice from "./shop/products-slice";
import shoppingCartSlice from "./shop/cart-slice";
import shopAddressSlice from "./shop/address-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    shopProducts: shoppingProductsSlice,
    shopCart: shoppingCartSlice,
    shopAddress: shopAddressSlice,
  },
});

export default store;
