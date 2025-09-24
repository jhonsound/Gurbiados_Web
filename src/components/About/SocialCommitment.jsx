import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const compromisoImage = "/src/assets/guabidos4.jpeg";

const SocialCommitment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, md: 6 },
        mb: 6,
        
      }}
      alignItems="center"
      maxWidth={"90%"}
      mx="auto"
    >
      <Grid item xs={12} md={6}>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            bgcolor: "white",
            boxShadow: 8,
          }}
        >
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <VolunteerActivismIcon color="warning" sx={{ fontSize: 40 }} />
            <Typography variant="h4" fontWeight="bold" color="warning.main">
              Compromiso Social y Sustentabilidad
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" fontSize={20}>
            Trabajamos para generar un impacto positivo en las comunidades y el
            medio ambiente. Promovemos la diversidad, la inclusión y el empleo
            formal. Descubre nuestra “Receta del futuro”.
          </Typography>
          <Button
            href="https://www.recetadelfuturo.com/"
            target="_blank"
            variant="outlined"
            color="warning"
            sx={{ mt: 2 }}
          >
            Receta del Futuro
          </Button>
        </Paper>
      </Grid>
      <Box sx={{ width: { xs: "100%", md: "40%" }, flexShrink: 0 }}>
        <Avatar
          src={compromisoImage}
          variant="rounded"
          sx={{ width: "100%", height: 250, boxShadow: 4, borderRadius: 5 }}
        />
      </Box>
    </Box>
  )
}

export default SocialCommitment