import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MissionContext from '../MissionContext';
import { maps } from '../utils/maps';
import { Button, Grid, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShuffleIcon from '@mui/icons-material/Shuffle'; // Icono para randomizar
import { StyledContainer } from './StyledTitle';
import MapItem from './MapItem';
import classes from '../styles/MissionSelector.module.scss';

const MapSelector = () => {
  const navigate = useNavigate();
  const { selectedMission, setSelectedMap, selectedTournamentType } = useContext(MissionContext);
  const possibleMaps = maps(selectedMission, selectedTournamentType.name);
  
  useEffect(() => {
    if(selectedTournamentType.singles){
      setSelectedMap(possibleMaps[0]);
      navigate('/mission-details'); 
    }
  }, [selectedTournamentType, possibleMaps, navigate, setSelectedMap]);

  const handleSelectMap = (map) => {
    setSelectedMap(map);
    navigate('/mission-details');
  };

  const handleRandomSelect = () => {
    const randomMap = possibleMaps[Math.floor(Math.random() * possibleMaps.length)];
    handleSelectMap(randomMap);
  };

  const handleGoBack = () => {
    setSelectedMap(null);
    navigate('/select-mission');
  };

  return (
    <div>
      {/* Barra Superior */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Select Map
          </Typography>
          {/* Botón para Randomizar con ícono */}
          <IconButton color="inherit" onClick={handleRandomSelect}>
            <ShuffleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Contenido */}
      <StyledContainer>
        <Grid container spacing={0}>
          {possibleMaps.map((map, index) => (
            <MapItem key={index} map={map} index={index} handleSelectMap={handleSelectMap} />
          ))}
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default MapSelector;
