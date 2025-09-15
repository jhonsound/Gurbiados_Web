import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#263238',
        color: '#fff',
        padding: 2,
        mt: 'auto',
        textAlign: 'center',
        p: 2,
      }}>
      <Typography variant="body1">
        Telefono de contacto: +57 (313) 329 5363
      </Typography>
      <Typography variant="body2">
        Email: gurbiados@gmail.com
      </Typography>
      <Typography variant="caption">
        Derechos reservados &copy; {new Date().getFullYear()} Gurbiados
      </Typography>
    </Box>
  );
}