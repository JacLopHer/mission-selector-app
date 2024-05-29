import React, { createContext, useState } from 'react';

const MissionContext = createContext();

export const MissionProvider = ({ children }) => {
  const [selectedTournamentType, setSelectedTournamentType] = useState(null);
  const [selectedMission, setSelectedMission] = useState(null);
  const [selectedMap, setSelectedMap] = useState(null);

  return (
    <MissionContext.Provider value={{ selectedMission, setSelectedMission, selectedMap, setSelectedMap, selectedTournamentType, setSelectedTournamentType }}>
      {children}
    </MissionContext.Provider>
  );
};

export default MissionContext;
