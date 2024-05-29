import React from 'react';

const MissionDetails = ({ mission, map }) => {
  if (!mission || !map) return null;

  return (
    <div>
      <h2>Mission Details</h2>
      <p><strong>Mission Round:</strong> {mission.round}</p>
      <p><strong>Primary Mission:</strong> {mission.primaryMission}</p>
      <p><strong>Mission Rule:</strong> {mission.missionRule}</p>
      <p><strong>Deployment:</strong> {mission.deployment}</p>
      <p><strong>Map:</strong> {map}</p>
    </div>
  );
};

export default MissionDetails;
