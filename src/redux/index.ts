import { configureStore } from "@reduxjs/toolkit";

import  modalSlice  from "./modal-store";
import shopSlice from "./shop-slice";

export const store =configureStore({
    reducer:{
        modalSlice,
        shopSlice,
    }
})


export type RootStore =ReturnType<typeof store.getState>;
export type DispatchType =typeof store.dispatch;