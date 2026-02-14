import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import FishDetailsScreen from '../pages/FishDetailsScreen';
import Dashboard from '../pages/Dashboard'; // Import the new Dashboard component

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/fishes/:id" element={<FishDetailsScreen />} /> {/* Updated route */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* New dashboard route */}
      {/* Add other routes here */}
    </Routes>
  );
};

export default AppNavigator;
