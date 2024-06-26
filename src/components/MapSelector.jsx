import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import MissionContext from '../MissionContext';
import { maps } from '../utils/maps';
import { List, ListItem, ListItemText, Typography, Button, Divider } from '@mui/material';

const MapSelector = () => {
  const navigate = useNavigate();
  const {selectedMission, setSelectedMap} = useContext(MissionContext);
  const possibleMaps = maps(selectedMission)
  console.log(possibleMaps)
  const handleSelectMap = (map) => {
    setSelectedMap(map);
    navigate('/mission-details');
  };
  const handleRandomSelect = () => {
    const randomMap = possibleMaps[Math.floor(Math.random() * possibleMaps.length)]
    handleSelectMap(randomMap);
  };

  const handleGoBack = () => {
    setSelectedMap(null)
    navigate(-1)
  }
  return (
    <div>
      <Typography variant="h4" gutterBottom>Select a Map</Typography>
      <Button variant="contained" color="primary" onClick={handleRandomSelect} fullWidth>
      Select Random Map
      </Button>
      <List>
        {possibleMaps.map((map, index) => (
          <>
            <ListItem style={{border: '0.1px solid #000'}} key={index} onClick={() => handleSelectMap(map)}>
              <ListItemText key={index} primary={`${map.table} - ${map.type} - ${map.number} `} />
            </ListItem>
            <Divider variant="middle" component="li" />
          </>
        ))}
      </List>
      <Button variant="outlined" color="secondary" onClick={() => handleGoBack()} fullWidth>Go Back</Button>
    </div>
  );
};

export default MapSelector;
