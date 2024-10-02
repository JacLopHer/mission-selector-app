import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { missions } from '../utils/missions';
import MissionContext from '../MissionContext';
import { Button, Typography, Grid } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';
import '../styles/MissionSelector.css'; // Asegúrate de crear este archivo CSS

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
        className="random-button" 
        onClick={handleRandomSelect} 
        fullWidth
      >
        Select Random Mission Round
      </Button>
      <Grid container alignItems="center" spacing={1} className="mission-grid">
        {possibleMissions.map((mission, index) => (
          <Grid item xs={6} sm={4} key={index} className="mission-grid-item">
            <Button 
              className="mission-button" 
              fullWidth 
              onClick={() => handleSelectMission(mission)}
            >
              <Typography variant="body1" className="mission-text">
                <span className="mission-title"><strong>{mission.primaryMission}</strong></span>
                <span className="mission-details">{mission.deployment}</span>
                {mission.missionRule !== "Chilling Rain" && <span className="mission-details">{mission.missionRule}</span>}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button 
        className="back-button" 
        onClick={() => navigate(-1)} 
        fullWidth
      >
        Go Back
      </Button>
    </>
  );
};

export default MissionSelector;
