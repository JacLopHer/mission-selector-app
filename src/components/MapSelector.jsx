import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MissionContext from '../MissionContext';
import { maps } from '../utils/maps';
import { Button, Grid } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';
import MapItem from './MapItem';

const MapSelector = () => {
  const navigate = useNavigate();
  const { selectedMission, setSelectedMap, selectedTournamentType } = useContext(MissionContext);
  const possibleMaps = maps(selectedMission, selectedTournamentType);

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
    navigate(-1);
  };

  return (
    <div>
      <StyledContainer>
        <StyledTitle variant="h4">Select Map</StyledTitle>
      </StyledContainer>
      <Button variant="contained" color="primary" onClick={handleRandomSelect} fullWidth style={{ marginBottom: '1rem' }}>
        Select Random Map
      </Button>
      <Grid container spacing={0}>
        {possibleMaps.map((map, index) => (
          <MapItem key={index} map={map} index={index} handleSelectMap={handleSelectMap} />
        ))}
      </Grid>
      <Button variant="outlined" color="secondary" onClick={handleGoBack} fullWidth>
        Go Back
      </Button>
    </div>
  );
};

export default MapSelector;
