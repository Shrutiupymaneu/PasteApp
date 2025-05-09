// Redux/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from './PasteSlice';

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
