// components/TripInclusions.js

import React from 'react';

const TripInclusions = () => {
  return (
    <div className="container mx-auto p-4 rajdhani-semibold">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg rounded-lg p-6 mb-6 w-full">
        <h2 className="text-2xl font-bold mb-4">What&apos;s Included</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Accommodation</li>
          <li>Breakfast and dinner</li>
          <li>Guided tours</li>
          <li>Airport transfers</li>
          <li>Entrance fees</li>
        </ul>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg rounded-lg p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">What&apos;s Not Included</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Airfare</li>
          <li>Travel insurance</li>
          <li>Personal expenses</li>
          <li>Optional activities</li>
        </ul>
      </div>
    </div>
  );
};

export default TripInclusions;
