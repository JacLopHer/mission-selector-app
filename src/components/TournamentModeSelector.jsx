import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { tournamentTypes } from '../utils/tournamentTypes';
import MissionContext from '../MissionContext';
import { List, ListItem, Button } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';
import '../styles/TournamentModeSelector.css'; // Importa el archivo CSS

const TournamentModeSelector = () => {
    const { setSelectedTournamentType } = useContext(MissionContext);
    const navigate = useNavigate();

    const handleSelectTournamentType = (tournamentType) => {
        setSelectedTournamentType(tournamentType);
        navigate('/select-mission');
    };

    return (
        <StyledContainer>
            <StyledTitle variant="h4">Tournament</StyledTitle>
            <List sx={{ marginTop: 2 }}>
                {tournamentTypes.map((type, index) => (
                    <ListItem key={index} sx={{ width: '100%' }}> {/* Asegura que los ListItems sean del 100% de ancho */}
                        <Button
                            className="button" // Usamos className
                            variant="contained"
                            onClick={() => handleSelectTournamentType(type)}
                            fullWidth
                        >
                            {type}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </StyledContainer>
    );
}

export default TournamentModeSelector;
