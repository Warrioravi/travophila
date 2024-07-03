import React from 'react';

const HighlightsComponent = ({ highlights }) => {
  return (
    <div className="bg-gradient-to-br  p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Highlights</h2>
      <ul className="list-disc">
        {highlights.map((highlight, index) => (
          <li key={index} className="mb-2">
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightsComponent;
