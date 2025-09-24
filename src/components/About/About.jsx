import { Avatar, Box, Paper, Typography } from "@mui/material";

const empresaImage = "/src/assets/guabidos4.jpeg";

const AboutComponent = () => {
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
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          height: "350px",
          flexShrink: 0,
        }}
      >
        <Avatar
          src={empresaImage}
          variant="rounded"
          sx={{ width: "100%", height: 250, boxShadow: 4, borderRadius: 5 }}
        />
      </Box>
      <Box>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            bgcolor: "white",
            boxShadow: 8,
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="primary" mb={2}>
            ¿Quiénes somos?
          </Typography>
          <Typography variant="body1" color="text.secondary" fontSize={20}>
            Gurbiados es el mayor operador de restaurantes de comida rápida en
            la región, con el derecho exclusivo de operar y franquiciar locales
            en varios países. Desde nuestra consolidación, apostamos por la
            calidad, transparencia, generación de empleo, apoyo a la comunidad y
            sostenibilidad.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default AboutComponent;
