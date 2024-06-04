import React, { useContext, useState } from 'react';
import MissionContext from '../MissionContext';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardMedia, CardContent, CardActions, Dialog, DialogContent, DialogActions as DialogActionsWrapper } from '@mui/material';

const MissionDetails = () => {
  const { selectedMission, selectedMap } = useContext(MissionContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!selectedMission || !selectedMap) return null;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          image={selectedMap.image}
          alt={selectedMap.name}
          onClick={handleClickOpen}
          sx={{ cursor: 'pointer' }}  // Make cursor pointer to indicate clickability
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

      {/* Full-screen dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
      >
        <DialogContent>
          <img
            src={selectedMap.image}
            alt={selectedMap.name}
            style={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
        <DialogActionsWrapper>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActionsWrapper>
      </Dialog>
    </div>
  );
};

export default MissionDetails;
