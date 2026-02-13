import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import './index.css'; // Keep index.css for Tailwind directives

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Fish Spotter App</h1>
      </header>
      <main className="container mx-auto p-4">
        <AppNavigator />
      </main>
    </div>
  );
}

export default App;
