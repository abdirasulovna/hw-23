import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todo/todos";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    
  },
});
