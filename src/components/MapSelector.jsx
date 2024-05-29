import React from 'react';
import { useNavigate } from 'react-router-dom';

const maps = ["Map 1", "Map 2", "Map 3", "Map 4", "Map 5", "Map 6", "Map 7", "Map 8"];

const MapSelector = ({ onSelectMap }) => {
  const navigate = useNavigate();

  const handleSelectMap = (map) => {
    onSelectMap(map);
    navigate('/mission-details');
  };

  const handleRandomSelect = () => {
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    handleSelectMap(randomMap);
  };

  return (
    <div>
      <h2>Select a Map</h2>
      <ul>
        {maps.map((map, index) => (
          <li key={index} onClick={() => handleSelectMap(map)}>
            {map}
          </li>
        ))}
      </ul>
      <button onClick={handleRandomSelect}>Select Random Map</button>
    </div>
  );
};

export default MapSelector;
