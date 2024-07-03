'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

const PlacePage = ({ place }) => {
  // Replace with actual data fetching logic
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    // Fetch place data based on the 'place' parameter
    // Example: fetch(`/api/places/${place}`).then(res => res.json()).then(data => setPlaceData(data));
    // For demo, you can use static data or mock API response
    const mockData = {
      name: 'Place Name',
      description: 'Short description of the place.',
      details: 'Detailed information about the place and its activities.',
      activities: [
        { name: 'Activity 1', image: '/activity1.jpg' },
        { name: 'Activity 2', image: '/activity2.jpg' },
        // Add more activities as needed
      ],
      tours: [
        { name: 'Tour 1', image: '/tour1.jpg' },
        { name: 'Tour 2', image: '/tour2.jpg' },
        // Add more tours as needed
      ],
    };
    setPlaceData(mockData); // Set mock data
  }, [place]);

  if (!placeData) {
    return <div>Loading...</div>; // Replace with a loading spinner or component
  }

  return (
    <div>
      {/* Background image */}
      <div className="relative h-[80vh]">
        <Image
          src="/images/background-1.jpg" // Replace with actual background image URL
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Place title and description */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">{placeData.name}</h1>
        <p className="text-lg lg:text-xl mb-8">{placeData.description}</p>

        {/* Details about the place */}
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Details</h2>
        <p className="text-lg mb-8">{placeData.details}</p>

        {/* Activities */}
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeData.activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image src={activity.image} alt={activity.name} width={300} height={200} className="object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tours - horizontally scrollable */}
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2 mt-8">Tours</h2>
        <div className="flex overflow-x-auto space-x-4 py-4">
          {placeData.tours.map((tour, index) => (
            <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-md">
              <Image src={tour.image} alt={tour.name} width={300} height={200} className="object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacePage;


