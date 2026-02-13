import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import FishDetailsScreen from '../pages/FishDetailsScreen';

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/fish/:id" element={<FishDetailsScreen />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default AppNavigator;
