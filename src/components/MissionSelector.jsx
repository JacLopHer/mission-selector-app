import React from 'react';
import { useNavigate } from 'react-router-dom';
import { missions } from '../utils/missions';

const MissionSelector = ({ onSelectMission }) => {
  const navigate = useNavigate();

  const handleSelectMission = (mission) => {
    onSelectMission(mission);
    navigate('/select-map');
  };

  const handleRandomSelect = () => {
    const randomMission = missions[Math.floor(Math.random() * missions.length)];
    handleSelectMission(randomMission);
  };

  return (
    <div>
      <h2>Select a Mission Round</h2>
      <ul>
        {missions.map((mission, index) => (
          <li key={index} onClick={() => handleSelectMission(mission)}>
            {mission.round}
          </li>
        ))}
      </ul>
      <button onClick={handleRandomSelect}>Select Random Mission Round</button>
    </div>
  );
};

export default MissionSelector;
