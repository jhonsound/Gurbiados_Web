import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Stack,
  Button,
  Link as MuiLink,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Head from "../components/About/Head";
import AboutComponent from "../components/About/About";

const bgImage = "/src/assets/guabidos1.jpeg";
const empresaImage = "/src/assets/guabidos4.jpeg";
const compromisoImage = "/src/assets/guabidos4.jpeg";
const logoImage = "/vite.svg";

const About = () => (
  <Box
  sx={{
      minHeight:"90vh",
      py: { xs: 3, md: 8 },
      position: "relative",
      zIndex: 1,
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.69)",
        zIndex: 2,
      },
      "& > *": {
        position: "relative",
        zIndex: 3,
      },
    }}
  >
    {/* Cabecera */}
    <Head />

    {/* ¿Quiénes somos? */}
    <AboutComponent />

    {/* Compromiso social y desarrollo sustentable */}
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

    {/* Misión, Visión & Valores */}
    <Box maxWidth={"90%"} mx="auto" mb={6}>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          bgcolor: "white",
          boxShadow: 8,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex={1}
          >
            <Avatar
              sx={{ bgcolor: "warning.main", width: 70, height: 70, mb: 2 }}
            >
              <EmojiObjectsIcon sx={{ fontSize: 40, color: "white" }} />
            </Avatar>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="warning.main"
              mb={1}
              sx={{ letterSpacing: 2 }}
            >
              Misión
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              fontSize={20}
              textAlign="center"
            >
              Servir comida de calidad generando momentos deliciosos y
              accesibles para todos.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex={1}
          >
            <Avatar
              sx={{ bgcolor: "primary.main", width: 70, height: 70, mb: 2 }}
            >
              <VisibilityIcon sx={{ fontSize: 40, color: "white" }} />
            </Avatar>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              mb={1}
              sx={{ letterSpacing: 2 }}
            >
              Visión
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              fontSize={20}
              textAlign="center"
            >
              Ser la empresa líder en el sector, reconocida por nuestro
              compromiso, excelencia y responsabilidad social.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            flex={1}
          >
            <Avatar sx={{ bgcolor: "grey.700", width: 70, height: 70, mb: 2 }}>
              <InfoOutlinedIcon sx={{ fontSize: 40, color: "white" }} />
            </Avatar>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="grey.700"
              mb={1}
              sx={{ letterSpacing: 2 }}
            >
              Valores
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              fontSize={20}
              textAlign="center"
            >
              Calidad, transparencia, innovación, diversidad, inclusión y
              responsabilidad social.
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>

    {/* Enlaces y redes sociales */}
    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
      <Typography variant="body2" color="text.secondary" mb={1}>
        Síguenos en nuestras redes sociales:
      </Typography>
      <Stack direction="row" spacing={2}>
        <MuiLink href="https://facebook.com" target="_blank" color="primary">
          Facebook
        </MuiLink>
        <MuiLink href="https://instagram.com" target="_blank" color="primary">
          Instagram
        </MuiLink>
        <MuiLink href="https://youtube.com" target="_blank" color="primary">
          YouTube
        </MuiLink>
        <MuiLink href="https://twitter.com" target="_blank" color="primary">
          Twitter
        </MuiLink>
      </Stack>
    </Box>
  </Box>
);

export default About;
