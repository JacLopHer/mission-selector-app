import React, {useContext} from 'react';
import MissionContext from '../MissionContext';

const MissionDetails = () => {
  const {selectedTournamentType, selectedMission, selectedMap} = useContext(MissionContext);
  if (!selectedMission || !selectedMap) return null;
  return (
    <div>
      <h2>Mission Details : {selectedTournamentType}</h2>
      <p><strong>Mission Round:</strong> {selectedMission.round}</p>
      <p><strong>Primary Mission:</strong> {selectedMission.primaryMission}</p>
      <p><strong>Mission Rule:</strong> {selectedMission.missionRule}</p>
      <p><strong>Deployment:</strong> {selectedMission.deployment}</p>
      <p><strong>Map:</strong> {selectedMap.img} </p>
    </div>
  );
};

export default MissionDetails;
