import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { tournamentTypes } from '../utils/tournamentTypes';
import MissionContext from '../MissionContext';
import { List, ListItem, ListItemText, Typography } from '@mui/material';


const TournamentModeSelector = () => {
    const {setSelectedTournamentType} = useContext(MissionContext);
    const navigate = useNavigate();
    
    const handleSelectTournamentType = (tournamentType) => {
        setSelectedTournamentType(tournamentType);
        navigate('/select-mission');
  };
  return (
    <div>
        <Typography variant="h4" gutterBottom>Tournament type</Typography>
        <List>
            {tournamentTypes.map((type, index) => (
            <ListItem key={index} onClick={() => handleSelectTournamentType(type)}>
                <ListItemText>{type}</ListItemText>
            </ListItem>
            ))}
        </List>
    </div>
  );
}

export default TournamentModeSelector