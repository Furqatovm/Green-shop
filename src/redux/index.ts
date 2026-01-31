import { configureStore } from "@reduxjs/toolkit";

import shopSlice from "./shop-slice";
import  modalSlice  from "./modal-store";
import blogModalSlice from "./blog-modal-slice";

export const store =configureStore({
    reducer:{
        modalSlice,
        shopSlice,
        blogModalSlice,
    }
})


export type RootStore =ReturnType<typeof store.getState>;
export type DispatchType =typeof store.dispatch;