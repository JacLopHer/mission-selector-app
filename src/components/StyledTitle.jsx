import React from 'react';
import { Button, Typography} from '@mui/material';
import { styled } from '@mui/system';

export const StyledContainer = styled('div')(({ theme }) => ({
    backgroundColor: '#1c1c1c',
    padding: theme.spacing(3),
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  }));
  
export const StyledTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Exo 2, sans-serif',
    fontWeight: '600',
    fontSize: '1.5rem', // Tamaño de fuente más pequeño
    color: '#D4AF37',
    marginBottom: theme.spacing(1), // Menor margen para ocupar menos espacio
    textAlign: 'center',
}));

export  const StyledMapCard = styled('div')(({ theme }) => ({
    backgroundColor: '#2e2e2e',
    borderRadius: '8px',
    padding: theme.spacing(2),
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    margin: theme.spacing(1),
    textAlign: 'left',
}));

export  const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: '#D4AF37',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#FFD700',
    },
}));
