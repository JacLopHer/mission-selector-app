import React, {useContext} from 'react';
import MissionContext from '../MissionContext';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';


const MissionDetails = () => {
  const { selectedMission, selectedMap} = useContext(MissionContext);
  const navigate = useNavigate();
  if (!selectedMission || !selectedMap) return null;

  return (
    <div>
      <Typography variant="h4" gutterBottom>Mission Details</Typography>
      <Typography variant="body1"><strong>Mission Round:</strong> {selectedMission.round}</Typography>
      <Typography variant="body1"><strong>Primary Mission:</strong> {selectedMission.primaryMission}</Typography>
      <Typography variant="body1"><strong>Mission Rule:</strong> {selectedMission.missionRule}</Typography>
      <Typography variant="body1"><strong>Deployment:</strong> {selectedMission.deployment}</Typography>

      <Card sx={{ marginTop: 2 }}>
        <CardMedia
          component="img"
          height="150"
          image={'../media/hammer/23_ha.png'}
          alt={selectedMap.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">{selectedMap.name}</Typography>
          <Typography variant="body2" color="text.secondary">Type: {selectedMap.type}</Typography>
          <Typography variant="body2" color="text.secondary">Number: {selectedMap.number}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary" onClick={() => navigate(-1)} fullWidth>
            Go Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MissionDetails;
