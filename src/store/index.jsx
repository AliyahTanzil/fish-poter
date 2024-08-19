// /src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import fishReducer from '../features/fishSlices';

export const store = configureStore({
  reducer: {
    fish: fishReducer,
  },
});