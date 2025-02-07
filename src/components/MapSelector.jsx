import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MissionContext from '../MissionContext';
import { maps } from '../utils/maps';
import { Button, Grid } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';
import MapItem from './MapItem';
import { campingNauta, warmaster } from '../constants/constants';
import classes from '../styles/MissionSelector.module.scss';

const MapSelector = () => {
  const navigate = useNavigate();
  const { selectedMission, setSelectedMap, selectedTournamentType } = useContext(MissionContext);
  const possibleMaps = maps(selectedMission, selectedTournamentType);
  

  useEffect(() => {
    if(selectedTournamentType === warmaster || selectedTournamentType === campingNauta){
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
      <Button onClick={handleRandomSelect} fullWidth  className={classes.randomButton}>
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
        className={classes.backButton}>
        Go Back
      </Button>
    </div>
  );
};

export default MapSelector;
