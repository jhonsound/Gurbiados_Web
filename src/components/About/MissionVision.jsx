import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const MissionVision = () => {
  return (
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
  )
}

export default MissionVision