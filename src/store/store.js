import { configureStore } from "@reduxjs/toolkit";
import JobsReducer from './slices/jobSlice'

export const store = configureStore({
  reducer: {
    jobs:JobsReducer
  },
});
