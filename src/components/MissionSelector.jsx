import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { missions } from '../utils/missions';
import MissionContext from '../MissionContext';

const MissionSelector = () => {
  const {selectedTournamentType, setSelectedMission} = useContext(MissionContext);
  const navigate = useNavigate();
  const possibleMissions = missions(selectedTournamentType)
  const handleSelectMission = (mission) => {
    setSelectedMission(mission);
    navigate('/select-map');
  };

  const handleRandomSelect = () => {
    const randomMission = possibleMissions[Math.floor(Math.random() * missions.length)];
    handleSelectMission(randomMission);
  };
  
  return (
    <div>
      <h2>Select a Mission Round</h2>
      <ul>
        {possibleMissions.map((mission, index) => (
          <li key={index} onClick={() => handleSelectMission(mission)}>
            {mission.primaryMission} | {mission.deployment} | {mission.missionRule}
          </li>
        ))}
      </ul>
      <button onClick={handleRandomSelect}>Select Random Mission Round</button>
    </div>
  );
};

export default MissionSelector;
