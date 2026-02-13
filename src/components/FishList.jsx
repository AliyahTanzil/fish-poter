import React from 'react';
import FishCard from './FishCard';

const FishList = ({ fishes }) => {
  if (!fishes || fishes.length === 0) {
    return <p className="text-center text-gray-500">No fish to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {fishes.map((fish) => (
        <FishCard key={fish.id} fish={fish} />
      ))}
    </div>
  );
};

export default FishList;
