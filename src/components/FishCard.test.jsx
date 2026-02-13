import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FishCard from './FishCard';
import { describe, it, expect } from 'vitest';

describe('FishCard', () => {
  const mockFish = {
    id: 1,
    name: 'Test Salmon',
    species: 'Salmo testus',
    image: 'test-salmon.jpg',
  };

  it('renders fish information correctly', () => {
    render(
      <BrowserRouter>
        <FishCard fish={mockFish} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockFish.name)).toBeInTheDocument();
    expect(screen.getByText(mockFish.species)).toBeInTheDocument();
    expect(screen.getByAltText(mockFish.name)).toHaveAttribute('src', mockFish.image);
  });

  it('renders a link to the fish details page', () => {
    render(
      <BrowserRouter>
        <FishCard fish={mockFish} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/fish/${mockFish.id}`);
  });
});
