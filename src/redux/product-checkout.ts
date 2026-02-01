import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isOpen: boolean;
}

const initialState: InitialStateType = {
    isOpen: false,
};

const productCheckoutSlice = createSlice({
  name: "product-checkout",
  initialState,
  reducers: {
    setProductCheckout(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setProductCheckout } = productCheckoutSlice.actions;
export default productCheckoutSlice.reducer;
