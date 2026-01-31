import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isOpen: boolean;
}

const initialState: InitialStateType = {
    isOpen: false,
};

const blogModalSlice = createSlice({
  name: "blog-modal",
  initialState,
  reducers: {
    setBlogAuthModal(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setBlogAuthModal } = blogModalSlice.actions;
export default blogModalSlice.reducer;
