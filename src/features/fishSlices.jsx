// /src/features/fishSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const fishSlice = createSlice({
  name: 'fish',
  initialState: {
    list: [],
  },
  reducers: {
    setFishList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setFishList } = fishSlice.actions;

export default fishSlice.reducer;