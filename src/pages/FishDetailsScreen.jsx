import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FishDetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fishes = useSelector((state) => state.fish.items);
  const fish = fishes.find((f) => f.id === parseInt(id)); // Assuming id is a number

  if (!fish) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500 text-xl">Fish not found!</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
      >
        &lt; Back to List
      </button>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{fish.name}</h1>
      <img
        src={fish.image}
        alt={fish.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-2">
        <span className="font-semibold">Species:</span> {fish.species}
      </p>
      <p className="text-gray-600">{fish.description || 'No description available.'}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default FishDetailsScreen;
