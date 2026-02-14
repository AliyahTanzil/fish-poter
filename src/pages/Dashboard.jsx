
import { useState, useEffect } from 'react';
import {
  Waves, Anchor, Ship, Fish, Wind, Sprout,
  Mountain, Cloud, Sun, Moon, Star, Droplets
} from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
// We'll use the API from our shared package
// import { fishesApi } from '../../../packages/shared/supabaseClient';

// Mock loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Static data for fish names and icons
const fishData = [
  { name: 'Salmon', icon: Waves, color: 'text-red-400' },
  { name: 'Tuna', icon: Anchor, color: 'text-blue-500' },
  { name: 'Marlin', icon: Ship, color: 'text-indigo-500' },
  { name: 'Trout', icon: Fish, color: 'text-green-500' },
  { name: 'Barracuda', icon: Wind, color: 'text-yellow-500' },
  { name: 'Grouper', icon: Sprout, color: 'text-pink-500' },
  { name: 'Snapper', icon: Mountain, color: 'text-red-500' },
  { name: 'Mackerel', icon: Cloud, color: 'text-gray-500' },
  { name: 'Swordfish', icon: Sun, color: 'text-orange-500' },
  { name: 'Halibut', icon: Moon, color: 'text-purple-500' },
  { name: 'Cod', icon: Star, color: 'text-yellow-400' },
  { name: 'Bass', icon: Droplets, color: 'text-teal-500' },
];

const Dashboard = () => {
  const [fishes, setFishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFishes = async () => {
      try {
        setLoading(true);
        // const fetchedFishes = await fishesApi.getFishes();
        // For now, we'll use our static data and simulate a delay
        setTimeout(() => {
            const dataWithIcons = fishData.map((fish, index) => ({
                id: index + 1, // Mock ID
                ...fish,
                count: Math.floor(Math.random() * 100), // Mock count
            }));
            setFishes(dataWithIcons);
            setLoading(false);
        }, 1500); // Simulate 1.5 second loading time
      } catch (error) {
        console.error('Error fetching fishes:', error);
        setLoading(false);
        // Handle error state here
      }
    };

    fetchFishes();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
      <header className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Welcome to the Fish Dashboard!
        </h1>
        <p className="mt-2 text-lg opacity-90">
          Explore a world of aquatic wonders with Fish-Porter.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {fishes.map((fish) => (
          <DashboardCard
            key={fish.id}
            label={fish.name}
            icon={fish.icon}
            count={fish.count}
            to={`/fishes/${fish.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
