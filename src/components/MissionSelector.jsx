import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { missions } from '../utils/missions';
import MissionContext from '../MissionContext';
import { List, ListItem, Button, Typography } from '@mui/material';
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
        style={{
          background: 'linear-gradient(45deg, #FF5722, #666699)',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          padding: '10px 20px',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
          transition: 'background 0.3s, transform 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #FF9800, #FF5722)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #FF5722, #FF9800)'}
      >
        Select Random Mission Round
      </Button>
      <List>
        {possibleMissions.map((mission, index) => (
          <ListItem key={index}>
            <Button 
              variant="contained" 
              color="info"
              style={{
                background: 'linear-gradient(45deg, #666699, #21CBF3)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                padding: '10px 20px',
                boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
                transition: 'background 0.3s, transform 0.2s',
                width: '100%',
              }}
              onClick={() => handleSelectMission(mission)}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #21CBF3, #2196F3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(45deg, #2196F3, #21CBF3)'}
            >
              <Typography variant="body1" style={{ display: 'flex', flexDirection: 'column'}}>
                <span style={{ textTransform: 'uppercase' }}><strong>{mission.primaryMission}</strong></span>
                <span style={{ textTransform: 'none' }}>{mission.deployment}</span>
                {mission.missionRule !== "Chilling Rain" && <span style={{ textTransform: 'none' }}>{mission.missionRule}</span>}
              </Typography>
            </Button>
          </ListItem>
        ))}
      </List>
      <Button 
        className="back-button" 
        onClick={() => navigate(-1)} 
        fullWidth
        style={{
          background: 'linear-gradient(45deg, #666699, #660066)',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          padding: '10px 20px',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
          transition: 'background 0.3s, transform 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#A0A0A0'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#BDBDBD'}
      >
        Go Back
      </Button>
    </>
  );
};

export default MissionSelector;
