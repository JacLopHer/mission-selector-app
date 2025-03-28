import React, { useContext, useState } from 'react';
import MissionContext from '../MissionContext';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardActions, Dialog, DialogContent, DialogActions as DialogActionsWrapper, AppBar, Toolbar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LazyImage } from './LazyImage';

const MissionDetails = () => {
  const { selectedMission, selectedMap, selectedTournamentType} = useContext(MissionContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (!selectedMission || !selectedMap) return null;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleGoBack = () =>
    selectedTournamentType.singles ? navigate('/select-mission') : navigate(-1);

  return (
    <div>
      {/* Barra Superior */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Mission Details
          </Typography>
          {/* Botón para Randomizar con ícono */}
        </Toolbar>
      </AppBar>

      {/* Contenido */}
      <Typography variant="body1"><strong>Mission Round:</strong> {selectedMission.round}</Typography>
      <Typography variant="body1"><strong>Primary Mission:</strong> {selectedMission.primaryMission}</Typography>
      <Typography variant="body1"><strong>Mission Rule:</strong> {selectedMission.missionRule}</Typography>
      <Typography variant="body1"><strong>Deployment:</strong> {selectedMission.deployment}</Typography>

      <Card sx={{ marginTop: 2 }}>
        <LazyImage
          src={selectedMap.image}
          alt={selectedMap.name}
          style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
          onClick={handleClickOpen}
        />
        <CardActions>{/* Puedes agregar acciones aquí si las necesitas */}</CardActions>
      </Card>

      {/* Full-screen dialog */}
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogContent>
          <LazyImage
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
