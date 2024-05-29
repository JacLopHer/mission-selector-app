import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MissionSelector from './components/MissionSelector';
import MapSelector from './components/MapSelector';
import MissionDetails from './components/MissionDetails';
import TournamentModeSelector from './components/TournamentModeSelector'
import './styles/styles.css'
import { MissionProvider } from './MissionContext';

const App = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedTournamentType, setSelectedTournamentType] = useState(null);

  return (
    <MissionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TournamentModeSelector />} />
          <Route path="/select-mission" element={<MissionSelector />} />
          <Route path="/select-map" element={<MapSelector />} />
          <Route path="/mission-details" element={<MissionDetails />} />
        </Routes>
      </Router>
      </MissionProvider>
  );
};

export default App;
