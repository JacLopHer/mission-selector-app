import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { tournamentTypes } from '../utils/tournamentTypes';
import MissionContext from '../MissionContext';
import { List, ListItem, Button } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';


const TournamentModeSelector = () => {
    const {setSelectedTournamentType} = useContext(MissionContext);
    const navigate = useNavigate();
    
    const handleSelectTournamentType = (tournamentType) => {
        setSelectedTournamentType(tournamentType);
        navigate('/select-mission');
  };
  return (
    <div>
        <StyledContainer>
            <StyledTitle variant="h4">Tournament type</StyledTitle>
        </StyledContainer>
        <List>
            {tournamentTypes.map((type, index) => (
            <ListItem key={index}>
                <Button  variant="contained" color="secondary" onClick={() => handleSelectTournamentType(type)} fullWidth>
                    {type}
                </Button>
            </ListItem>
            ))}
        </List>
    </div>
  );
}

export default TournamentModeSelector