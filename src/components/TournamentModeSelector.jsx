import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { tournamentTypes } from '../utils/tournamentTypes';
import MissionContext from '../MissionContext';
import { List, ListItem, Button, AppBar, Toolbar, Typography } from '@mui/material';
import classes from '../styles/MissionSelector.module.scss';

const TournamentModeSelector = () => {
    const { setSelectedTournamentType } = useContext(MissionContext);
    const navigate = useNavigate();

    const handleSelectTournamentType = (tournamentType) => {
        setSelectedTournamentType(tournamentType);
        navigate('/select-mission');
    };

    return (
        <div>
            {/* Barra Superior */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Select Tournament
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Contenido */}
            <List sx={{ marginTop: 2 }}>
                {tournamentTypes.map((type, index) => (
                    <ListItem key={index} sx={{ width: '100%' }}>
                        <Button
                            className={classes.button}
                            onClick={() => handleSelectTournamentType(type)}
                            fullWidth
                        >
                            {type.name}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TournamentModeSelector;
