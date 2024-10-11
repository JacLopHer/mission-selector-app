import React, { useContext, useState } from 'react';
import MissionContext from '../MissionContext';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardMedia, CardActions, Dialog, DialogContent, DialogActions as DialogActionsWrapper } from '@mui/material';
import { StyledContainer, StyledTitle } from './StyledTitle';
import { warmaster } from '../constants/constants';
import classes from '../styles/MissionSelector.module.scss'; // Asegúrate de crear este archivo CSS

const MissionDetails = () => {
  const { selectedMission, selectedMap, selectedTournamentType } = useContext(MissionContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!selectedMission || !selectedMap) return null;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGoBack = () => {
    selectedTournamentType === warmaster ? navigate('/select-mission') : navigate(-1)
  }

  return (
    <div>
      <StyledContainer style={{marginBottom: '0.5rem'}}>
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
      <Button variant="outlined" color="secondary" onClick={handleGoBack} fullWidth className={classes.backButton} >
            Go Back
      </Button>
    </div>
  );
};

export default MissionDetails;
