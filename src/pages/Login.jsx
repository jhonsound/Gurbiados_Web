import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log("Datos de login:", formData);
    // Por ahora, redirigir al home después del login
    navigate("/");
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(/src/assets/guabidos1.jpeg)",
        backgroundSize: "cover",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: 4,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              color: "#d87512",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Iniciar Sesión
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Grid item xs={12} sx={{ width: "90%" }}>
                <TextField
                  fullWidth
                  label="Correo Electrónico"
                  color="warning"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ width: "90%" }}>
                <TextField
                  fullWidth
                  label="Contraseña"
                  color="warning"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ width: "90%" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="warning"
                  size="large"
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#d87512",
                      transform: "scale(1.02)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography variant="body2">
                  ¿No tienes una cuenta?{" "}
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => navigate("/register")}
                    sx={{
                      color: "#d87512",
                      fontWeight: "bold",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Regístrate aquí
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
