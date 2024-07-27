import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { missions } from '../utils/missions';
import MissionContext from '../MissionContext';
import { List, ListItem, Button} from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';

const MissionSelector = () => {
  const {selectedTournamentType, setSelectedMission} = useContext(MissionContext);
  const navigate = useNavigate();
  const possibleMissions = missions(selectedTournamentType)
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
      <Button variant="contained" color="primary" onClick={handleRandomSelect} fullWidth>
        Select Random Mission Round
      </Button>
      <List>
        {possibleMissions.map((mission, index) => (
          <>
            <ListItem  onClick={() => handleSelectMission(mission)}>
              <Button  key={index} variant='contained' color='secondary' fullWidth>
                {`${mission.primaryMission} | ${mission.deployment} ${mission.missionRule !== "Chilling Rain" ? "| " + mission.missionRule : ""}`}
              </Button>
            </ListItem>
          </>
        ))}
      </List>
      <Button variant="outlined" color="secondary" onClick={() => navigate(-1)} fullWidth>Go Back</Button>
    </>
  );
};

export default MissionSelector;
