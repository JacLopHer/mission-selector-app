import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { missions } from '../utils/missions';
import MissionContext from '../MissionContext';
import { Button, Typography, Grid, AppBar, Toolbar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledContainer } from './StyledTitle';
import classes from '../styles/MissionSelector.module.scss';
import ShuffleIcon from '@mui/icons-material/Shuffle';

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
      {/* Barra Superior */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/mission-selector-app')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Select Round
          </Typography>
          {/* Botón para Randomizar */}
          <IconButton color="inherit" onClick={handleRandomSelect}>
            <ShuffleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Contenido */}
      <StyledContainer>
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
      </StyledContainer>
    </>
  );
};

export default MissionSelector;
