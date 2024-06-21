import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MissionSelector from './components/MissionSelector';
import MapSelector from './components/MapSelector';
import MissionDetails from './components/MissionDetails';
import TournamentModeSelector from './components/TournamentModeSelector'
import { MissionProvider } from './MissionContext';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './styles/styles.css'

const App = () => {
  
  return (
    <MissionProvider>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <Routes>
            <Route path="/mission-selector-app/" element={<TournamentModeSelector />} />
            <Route path="/select-mission/" element={<MissionSelector />} />
            <Route path="/select-map/" element={<MapSelector />} />
            <Route path="/mission-details/" element={<MissionDetails />} />
          </Routes>
        </Router>
      </Container>
      </MissionProvider>
  );
};

export default App;
