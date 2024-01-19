import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import uploadsSlice from "./features/uploads";
import loaderSlice from "./features/loaders";

export const store = configureStore({
  reducer: {
    user: userSlice,
    uploads: uploadsSlice,
    loaders: loaderSlice,
  },
});
