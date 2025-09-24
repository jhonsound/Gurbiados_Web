import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
const logoImage = "/vite.svg";

const Head = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
      <Avatar
        src={logoImage}
        sx={{ width: 120, height: 120, mb: 2, bgcolor: "white" }}
      />
      <Typography
        variant="h2"
        fontWeight="bold"
        color="primary"
        sx={{ letterSpacing: 3, mb: 1 }}
      >
        Sobre Nosotros!!!
      </Typography>
    </Box>
  )
}

export default Head