// /src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import fishReducer from '../features/fishSlice';

export const store = configureStore({
  reducer: {
    fish: fishReducer,
  },
});