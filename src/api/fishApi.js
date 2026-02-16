
import dummyFishData from './dummyData';

// This file mimics a real API service.
// In a real app, this is where you'd put your fetch/axios calls to a backend.

export const fishApi = {
  // Simulates fetching all fishes
  getFishes: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(dummyFishData), 50);
    });
  },
};
