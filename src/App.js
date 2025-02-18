import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MissionSelector from './components/MissionSelector';
import MapSelector from './components/MapSelector';
import MissionDetails from './components/MissionDetails';
import TournamentModeSelector from './components/TournamentModeSelector';
import { MissionProvider } from './MissionContext';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/exo-2'; 

// Definimos un tema oscuro con colores elegantes y una tipografía moderna
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1c1c1c',
      paper: '#2c2c2c', // Fondo de papel más claro para los contenedores
    },
    text: {
      primary: '#EAEAEA', // Color de texto principal
      secondary: '#D4AF37', // Color dorado para textos secundarios
    },
  },
  typography: {
    fontFamily: 'Exo 2, sans-serif', // Tipografía moderna
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#D4AF37',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#EAEAEA',
    },
    body1: {
      fontSize: '1rem',
      color: '#EAEAEA',
    },
  },
});

const App = () => {
  return (
    <MissionProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg" style={{ padding: '2rem', borderRadius: '8px', backgroundColor: '#2c2c2c', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}>
          <Router>
            <Routes>
              <Route path="/mission-selector-app/" element={<TournamentModeSelector />} />
              <Route path="/select-mission/" element={<MissionSelector />} />
              <Route path="/select-map/" element={<MapSelector />} />
              <Route path="/mission-details/" element={<MissionDetails />} />
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </MissionProvider>
  );
};

export default App;
