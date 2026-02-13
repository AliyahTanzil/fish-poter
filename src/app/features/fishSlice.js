import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching fish data
export const fetchFish = createAsyncThunk('fish/fetchFish', async () => {
  const response = await axios.get('https://api.example.com/fish'); // Placeholder API
  return response.data;
});

const fishSlice = createSlice({
  name: 'fish',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    searchTerm: '', // New state for search term
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFish.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFish.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFish.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = fishSlice.actions; // Export the action
export default fishSlice.reducer;
