import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFish, setSearchTerm } from '@/app/features/fishSlice'; // Use alias
import FishList from '@/components/FishList'; // Use alias
import SearchBar from '@/components/SearchBar'; // Use alias

const HomeScreen = () => {
  const dispatch = useDispatch();
  const fishItems = useSelector((state) => state.fish.items); // Renamed to avoid conflict
  const fishStatus = useSelector((state) => state.fish.status);
  const error = useSelector((state) => state.fish.error);
  const searchTerm = useSelector((state) => state.fish.searchTerm); // Select searchTerm

  useEffect(() => {
    if (fishStatus === 'idle') {
      dispatch(fetchFish());
    }
  }, [fishStatus, dispatch]);

  const handleSearchTermChange = (term) => {
    dispatch(setSearchTerm(term));
  };

  const filteredFish = fishItems.filter((fish) =>
    fish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fish.species.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let content;

  if (fishStatus === 'loading') {
    content = <p className="text-center text-blue-500">Loading fish...</p>;
  } else if (fishStatus === 'succeeded') {
    content = <FishList fishes={filteredFish} />; // Pass filtered fish
  } else if (fishStatus === 'failed') {
    content = <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Fish List</h1>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} /> {/* Add SearchBar */}
      {content}
    </div>
  );
};

export default HomeScreen;
