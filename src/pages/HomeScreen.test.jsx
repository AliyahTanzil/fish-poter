import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import HomeScreen from '@/pages/HomeScreen';
import fishReducer from '@/app/features/fishSlice';
import axios from 'axios';
import { beforeEach, describe, it, expect, vi } from 'vitest';

// Mock axios to prevent actual API calls during tests
vi.mock('axios');

const renderWithProviders = (ui, { initialState } = {}) => {
  const store = configureStore({
    reducer: {
      fish: fishReducer,
    },
    preloadedState: initialState,
  });
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe('HomeScreen', () => {
  beforeEach(() => {
    // Reset mocks before each test
    axios.get.mockReset();
    // Mock a successful API response for fetchFish
    axios.get.mockResolvedValue({
      data: [
        { id: 1, name: 'Salmon', species: 'Salmo salar', image: 'salmon.jpg', description: 'desc 1' },
        { id: 2, name: 'Tuna', species: 'Thunnus thynnus', image: 'tuna.jpg', description: 'desc 2' },
        { id: 3, name: 'Cod', species: 'Gadus morhua', image: 'cod.jpg', description: 'desc 3' },
        { id: 4, name: 'Sardine', species: 'Sardina pilchardus', image: 'sardine.jpg', description: 'desc 4' },
      ],
    });
  });

  it('renders loading state initially', () => {
    renderWithProviders(<HomeScreen />);
    expect(screen.getByText(/loading fish/i)).toBeInTheDocument();
  });

  it('renders fish list after successful fetch', async () => {
    renderWithProviders(<HomeScreen />);
    await waitFor(() => expect(screen.getByText(/salmon/i)).toBeInTheDocument());
    expect(screen.getByText(/tuna/i)).toBeInTheDocument();
    expect(screen.getByText(/cod/i)).toBeInTheDocument();
  });

  it('filters fish based on search term (name)', async () => {
    renderWithProviders(<HomeScreen />);
    await waitFor(() => expect(screen.getByText(/salmon/i)).toBeInTheDocument());

    const searchInput = screen.getByPlaceholderText(/search fish by name or species/i);
    await userEvent.type(searchInput, 'sal');

    expect(screen.getByText(/salmon/i)).toBeInTheDocument();
    expect(screen.queryByText(/tuna/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/cod/i)).not.toBeInTheDocument();
  });

  it('filters fish based on search term (species)', async () => {
    renderWithProviders(<HomeScreen />);
    await waitFor(() => expect(screen.getByText(/salmon/i)).toBeInTheDocument());

    const searchInput = screen.getByPlaceholderText(/search fish by name or species/i);
    await userEvent.type(searchInput, 'thynnus');

    expect(screen.queryByText(/salmon/i)).not.toBeInTheDocument();
    expect(screen.getByText(/tuna/i)).toBeInTheDocument();
    expect(screen.queryByText(/cod/i)).not.toBeInTheDocument();
  });

  it('displays "No fish to display" when search yields no results', async () => {
    renderWithProviders(<HomeScreen />);
    await waitFor(() => expect(screen.getByText(/salmon/i)).toBeInTheDocument());

    const searchInput = screen.getByPlaceholderText(/search fish by name or species/i);
    await userEvent.type(searchInput, 'nonexistent');

    expect(screen.getByText(/no fish to display/i)).toBeInTheDocument();
    expect(screen.queryByText(/salmon/i)).not.toBeInTheDocument();
  });

  it('displays error message on failed fetch', async () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch')); // Mock failure for this test
    renderWithProviders(<HomeScreen />);
    await waitFor(() => expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument());
    expect(screen.queryByText(/loading fish/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/salmon/i)).not.toBeInTheDocument();
  });
});
