import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
  },
});
