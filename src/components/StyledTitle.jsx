import { Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

export const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#1c1c1c',
    padding: theme.spacing(3),
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
}));
  
export const StyledTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Cinzel Decorative, serif',
    fontWeight: '700',
    color: '#D4AF37', // Gold color
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
    marginBottom: theme.spacing(2),
    border: '2px solid #222',
    padding: theme.spacing(1),
    background: 'linear-gradient(45deg, #333333, #111111)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
}));

