import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { missions } from '../utils/missions';
import MissionContext from '../MissionContext';
import { Button, Typography, Grid } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';
import classes from '../styles/MissionSelector.module.scss'; // Asegúrate de crear este archivo CSS

const MissionSelector = () => {
  const { selectedTournamentType, setSelectedMission } = useContext(MissionContext);
  const navigate = useNavigate();
  const possibleMissions = missions(selectedTournamentType);
  
  const handleSelectMission = (mission) => {
    setSelectedMission(mission);
    navigate('/select-map');
  };

  const handleRandomSelect = () => {
    const randomMission = possibleMissions[Math.floor(Math.random() * possibleMissions.length)];
    handleSelectMission(randomMission);
  };

  return (
    <>
      <StyledContainer>
        <StyledTitle variant="h4">Select Round</StyledTitle>
      </StyledContainer>
      <Button 
        className={classes.randomButton} 
        onClick={handleRandomSelect} 
        fullWidth
      >
        Select Random Mission Round
      </Button>
      <Grid container alignItems="center" spacing={1} className={classes.missionGrid}>
        {possibleMissions.map((mission, index) => (
          <Grid item xs={6} sm={4} key={index} className={classes.missionGridItem}>
            <Button 
              className={classes.missionButton} 
              fullWidth 
              onClick={() => handleSelectMission(mission)}
            >
              <Typography variant="body1" className={classes.missionText}>
                <span className={classes.missionTitle}><strong>{mission.primaryMission}</strong></span>
                <span className={classes.missionDetails}>{mission.deployment}</span>
                {mission.missionRule !== "Chilling Rain" && <span className={classes.missionDetails}>{mission.missionRule}</span>}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button 
        className={classes.backButton} 
        onClick={() => navigate('/mission-selector-app')} 
        fullWidth
      >
        Go Back
      </Button>
    </>
  );
};

export default MissionSelector;
