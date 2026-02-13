import React from 'react';

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search fish by name or species..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
