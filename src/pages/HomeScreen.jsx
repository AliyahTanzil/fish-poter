import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFish, setSearchTerm } from '@/app/features/fishSlice';
import FishList from '@/components/FishList';
import SearchBar from '@/components/SearchBar';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const fishItems = useSelector((state) => state.fish.items);
  const fishStatus = useSelector((state) => state.fish.status);
  const error = useSelector((state) => state.fish.error);
  const searchTerm = useSelector((state) => state.fish.searchTerm);

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

  // Calculate summary statistics
  const totalFish = filteredFish.length;
  const totalCost = filteredFish.reduce((sum, fish) => sum + (fish.cost || 0), 0);
  const averageCost = totalFish > 0 ? (totalCost / totalFish) : 0;

  let content;

  if (fishStatus === 'loading') {
    content = <p className="text-center text-blue-500 text-lg">Loading fish data...</p>;
  } else if (fishStatus === 'succeeded') {
    content = <FishList fishes={filteredFish} />;
  } else if (fishStatus === 'failed') {
    content = <p className="text-center text-red-500 text-lg font-semibold">Error: {error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Fish Dashboard</h1>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-lg text-gray-500">Total Fish Displayed</p>
              <p className="text-3xl font-bold text-gray-900">{totalFish}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-lg text-gray-500">Total Value</p>
              <p className="text-3xl font-bold text-gray-900">${totalCost.toFixed(2)}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 8v4m-6 0h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-lg text-gray-500">Average Cost</p>
              <p className="text-3xl font-bold text-gray-900">${averageCost.toFixed(2)}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14V5l3-3m0 0l3 3m-3-3v11m0-8h.01M12 18H5a2 2 0 00-2 2v1a2 2 0 002 2h14a2 2 0 002-2v-1a2 2 0 00-2-2h-7z" />
            </svg>
          </div>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />

        {content}
      </div>
    </div>
  );
};

export default HomeScreen;
