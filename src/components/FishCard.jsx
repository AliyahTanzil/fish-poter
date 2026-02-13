import React from 'react';
import { Link } from 'react-router-dom';

const FishCard = ({ fish }) => {
  return (
    <Link to={`/fish/${fish.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={fish.image} // Assuming fish object has an 'image' property
          alt={fish.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{fish.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{fish.species}</p>
          {/* Add more fish details here if needed */}
        </div>
      </div>
    </Link>
  );
};

export default FishCard;
