import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import MissionContext from '../MissionContext';
import { maps } from '../utils/maps';

const MapSelector = () => {
  const navigate = useNavigate();
  const {selectedMission, setSelectedMap} = useContext(MissionContext);
  const possibleMaps = maps(selectedMission)
  const handleSelectMap = (map) => {
    setSelectedMap(map);
    navigate('/mission-details');
  };
  const handleRandomSelect = () => {
    const randomMap = possibleMaps[Math.floor(Math.random() * maps.length)];
    handleSelectMap(randomMap);
  };

  return (
    <div>
      <h2>Select a Map</h2>
      <button onClick={handleRandomSelect}>Select Random Map</button>
      <ul>
        {maps(selectedMission).map((map, index) => (
          <li key={index} onClick={() => handleSelectMap(map)}>
            {map.type} | {map.number} | {map.img}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default MapSelector;
