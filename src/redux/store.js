import { configureStore } from "@reduxjs/toolkit";

import { productModalSlice } from "./product-modal/ProductModalSlice";
import { cartItemsSlice } from "./shopping-cart/cartitemsSlice";

export const store = configureStore({
    reducer: {
        productModal: productModalSlice.reducer,
        cartItems: cartItemsSlice.reducer
    }
})