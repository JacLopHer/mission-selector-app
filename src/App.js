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
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    tomato: '#FF6347',
    pink: {
      deep: '#FF1493',
      hot: '#FF69B4',
      medium: '#C71585',
      pale: '#DB7093',
      light: '#FFB6C1',
    },
  },
});

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
