import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MissionContext from '../MissionContext';
import { maps } from '../utils/maps';
import { Button, Grid } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';
import MapItem from './MapItem';
import { warmaster } from '../constants/constants';

const MapSelector = () => {
  const navigate = useNavigate();
  const { selectedMission, setSelectedMap, selectedTournamentType } = useContext(MissionContext);
  const possibleMaps = maps(selectedMission, selectedTournamentType);
  

  useEffect(() => {
    if(selectedTournamentType === warmaster){
      setSelectedMap(possibleMaps[0])
      navigate('/mission-details'); 
    }
  },[])
  
  

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
      <StyledContainer>
        <StyledTitle variant="h4">Select Map</StyledTitle>
      </StyledContainer>
      <Button variant="contained" color="primary" onClick={handleRandomSelect} fullWidth  style={{
          background: 'linear-gradient(45deg, #FF5722, #666699)',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          padding: '10px 20px',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
          transition: 'background 0.3s, transform 0.2s',
          margin: '0.5rem'
        }}>
        Select Random Map
      </Button>
      <Grid container spacing={0}>
        {possibleMaps.map((map, index) => (
          <MapItem key={index} map={map} index={index} handleSelectMap={handleSelectMap} />
        ))}
      </Grid>
      <Button 
        onClick={handleGoBack} 
        fullWidth 
        style={{
          marginTop: '1rem',
          background: 'linear-gradient(45deg, #666699, #660066)',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          padding: '10px 20px',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
          transition: 'background 0.3s, transform 0.2s',
          margin: '0.5rem'
        }}>
        Go Back
      </Button>
    </div>
  );
};

export default MapSelector;
