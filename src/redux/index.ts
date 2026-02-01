import { configureStore } from "@reduxjs/toolkit";

import shopSlice from "./shop-slice";
import  modalSlice  from "./modal-store";
import blogModalSlice from "./blog-modal-slice";
import authSlice from "./auth-slice";
import productCheckout from "./product-checkout";

export const store =configureStore({
    reducer:{
        modalSlice,
        shopSlice,
        blogModalSlice,
        authSlice,
        productCheckout,
        
    }
})


export type RootStore =ReturnType<typeof store.getState>;
export type DispatchType =typeof store.dispatch;