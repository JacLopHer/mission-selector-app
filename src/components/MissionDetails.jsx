import React, { useContext, useState } from 'react';
import MissionContext from '../MissionContext';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardMedia, CardActions, Dialog, DialogContent, DialogActions as DialogActionsWrapper } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';

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
      <StyledContainer>
          <StyledTitle variant="h4">Mission Details</StyledTitle>
      </StyledContainer>
      <Typography variant="body1"><strong>Mission Round:</strong> {selectedMission.round}</Typography>
      <Typography variant="body1"><strong>Primary Mission:</strong> {selectedMission.primaryMission}</Typography>
      <Typography variant="body1"><strong>Mission Rule:</strong> {selectedMission.missionRule}</Typography>
      <Typography variant="body1"><strong>Deployment:</strong> {selectedMission.deployment}</Typography>
      
      <Card sx={{ marginTop: 2 }}>
        <CardMedia
          component="img"
          height="100%"
          image={selectedMap.image}
          alt={selectedMap.name}
          onClick={handleClickOpen}
          sx={{ cursor: 'pointer' }}  // Make cursor pointer to indicate clickability
        />
        <CardActions>
          
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
      <Button variant="outlined" color="secondary" onClick={() => navigate(-1)} fullWidth
         style={{
          background: 'linear-gradient(45deg, #666699, #660066)',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          padding: '10px 20px',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
          transition: 'background 0.3s, transform 0.2s',
        }}>
            Go Back
      </Button>
    </div>
  );
};

export default MissionDetails;
