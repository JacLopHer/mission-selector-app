import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MissionSelector from './components/MissionSelector';
import MapSelector from './components/MapSelector';
import MissionDetails from './components/MissionDetails';
import './styles/styles.css'

const App = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [selectedMap, setSelectedMap] = useState(null);

  const handleSelectMission = (mission) => {
    setSelectedMission(mission);
    setSelectedMap(null); // Reset map when a new mission is selected
  };

  const handleSelectMap = (map) => {
    setSelectedMap(map);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MissionSelector onSelectMission={handleSelectMission} />} />
        <Route path="/select-map" element={<MapSelector onSelectMap={handleSelectMap} />} />
        <Route path="/mission-details" element={<MissionDetails mission={selectedMission} map={selectedMap} />} />
      </Routes>
    </Router>
  );
};

export default App;
