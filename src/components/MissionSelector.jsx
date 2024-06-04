import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { missions } from '../utils/missions';
import MissionContext from '../MissionContext';
import { List, ListItem, ListItemText, Typography, Button, Divider } from '@mui/material';

const MissionSelector = () => {
  const {selectedTournamentType, setSelectedMission} = useContext(MissionContext);
  const navigate = useNavigate();
  const possibleMissions = missions(selectedTournamentType)
  const handleSelectMission = (mission) => {
    setSelectedMission(mission);
    navigate('/select-map');
  };

  const handleRandomSelect = () => {
    const randomMission = possibleMissions[Math.floor(Math.random() * missions.length)];
    handleSelectMission(randomMission);
  };
  
  return (
    <div>
      <Typography variant="h4" gutterBottom>Select a Mission Round</Typography>
      <Button variant="contained" color="primary" onClick={handleRandomSelect} fullWidth>
        Select Random Mission Round
      </Button>
      <List>
        {possibleMissions.map((mission, index) => (
          <>
            <ListItem style={{border: '0.1px solid #000'}} key={index} onClick={() => handleSelectMission(mission)}>
              <ListItemText key={index} primary={`${mission.primaryMission} - ${mission.deployment} ${mission.missionRule !== "Chilling Rain" ? "-" + mission.missionRule : ""}`} />
            </ListItem>
            <Divider variant="middle" component="li" />
          </>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default MissionSelector;
