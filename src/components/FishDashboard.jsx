import React from 'react';
import { Fish, Anchor, Ship, Shell, Bone, Sprout, Tent, Zap, Sun, Cloud, Moon, Star } from 'lucide-react';

const fishData = [
  { name: 'Salmon', icon: Fish, bgColor: 'bg-orange-500', iconColor: 'text-white' },
  { name: 'Tuna', icon: Anchor, bgColor: 'bg-blue-600', iconColor: 'text-white' },
  { name: 'Marlin', icon: Ship, bgColor: 'bg-indigo-600', iconColor: 'text-white' },
  { name: 'Trout', icon: Sprout, bgColor: 'bg-green-500', iconColor: 'text-white' },
  { name: 'Barracuda', icon: Bone, bgColor: 'bg-gray-700', iconColor: 'text-white' },
  { name: 'Grouper', icon: Shell, bgColor: 'bg-stone-700', iconColor: 'text-white' },
  { name: 'Snapper', icon: Shell, bgColor: 'bg-red-500', iconColor: 'text-white' },
  { name: 'Mackerel', icon: Zap, bgColor: 'bg-sky-500', iconColor: 'text-white' },
  { name: 'Swordfish', icon: Ship, bgColor: 'bg-purple-600', iconColor: 'text-white' },
  { name: 'Halibut', icon: Cloud, bgColor: 'bg-gray-400', iconColor: 'text-white' },
  { name: 'Cod', icon: Moon, bgColor: 'bg-slate-600', iconColor: 'text-white' },
  { name: 'Bass', icon: Star, bgColor: 'bg-yellow-500', iconColor: 'text-white' },
];

const FishDashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {fishData.map((fish, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 bg-white border border-[#e5e7eb] rounded-xl
                     shadow-sm hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200 ease-in-out"
        >
          {/* Icon with colored background glow effect */}
          <div className={`p-3 rounded-full ${fish.bgColor} mb-2 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out`}>
            <fish.icon size={24} className={fish.iconColor} /> {/* Smaller icon inside the colored circle */}
          </div>
          <p className="text-center font-sans text-gray-700">{fish.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FishDashboard;
