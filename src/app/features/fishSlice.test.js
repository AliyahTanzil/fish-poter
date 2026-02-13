import { configureStore } from '@reduxjs/toolkit';
import fishReducer, { fetchFish, setSearchTerm } from './fishSlice';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import axios from 'axios';

// Mock axios to prevent actual API calls during tests
vi.mock('axios');

describe('fishSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        fish: fishReducer,
      },
    });
  });

  it('should return the initial state', () => {
    expect(store.getState().fish.items).toEqual([]);
    expect(store.getState().fish.status).toEqual('idle');
    expect(store.getState().fish.error).toBeNull();
    expect(store.getState().fish.searchTerm).toEqual('');
  });

  it('should handle setSearchTerm', () => {
    store.dispatch(setSearchTerm('salmon'));
    expect(store.getState().fish.searchTerm).toEqual('salmon');
  });

  describe('fetchFish', () => {
    it('should handle pending state', () => {
      axios.get.mockResolvedValueOnce({ data: [] });
      store.dispatch(fetchFish());
      expect(store.getState().fish.status).toEqual('loading');
    });

    it('should handle fulfilled state', async () => {
      const mockFishData = [
        { id: 1, name: 'Salmon', species: 'Salmo salar', image: 'salmon.jpg' },
        { id: 2, name: 'Tuna', species: 'Thunnus thynnus', image: 'tuna.jpg' },
      ];
      axios.get.mockResolvedValueOnce({ data: mockFishData });

      await store.dispatch(fetchFish());

      expect(store.getState().fish.status).toEqual('succeeded');
      expect(store.getState().fish.items).toEqual(mockFishData);
    });

    it('should handle rejected state', async () => {
      const errorMessage = 'Network Error';
      axios.get.mockRejectedValueOnce(new Error(errorMessage));

      await store.dispatch(fetchFish());

      expect(store.getState().fish.status).toEqual('failed');
      expect(store.getState().fish.error).toEqual(errorMessage);
    });
  });
});
