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

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Aquí iría la lógica de registro
    console.log("Datos de registro:", formData);
    // Por ahora, redirigir al login después del registro
    navigate("/login");
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
        py: 4,
      }}
    >
      <Container maxWidth="md">
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
            Crear Cuenta
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid
              container
              spacing={3}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Grid item xs={12} sx={{ width: "80%" }}>
                <TextField
                  fullWidth
                  label="Nombre Completo"
                  name="name"
                  color="warning"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ width: "80%" }}>
                <TextField
                  fullWidth
                  label="Correo Electrónico"
                  name="email"
                  color="warning"
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

              <Grid item xs={12} sx={{ width: "80%" }}>
                <TextField
                  fullWidth
                  label="Número de Contacto"
                  name="phone"
                  color="warning"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ width: "80%" }}>
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

              <Grid item xs={12} sx={{ width: "80%" }}>
                <TextField
                  fullWidth
                  color="warning"
                  label="Confirmar Contraseña"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ width: "80%" }}>
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
                  Crear Cuenta
                </Button>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography variant="body2">
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => navigate("/login")}
                    sx={{
                      color: "#d87512",
                      fontWeight: "bold",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Inicia sesión aquí
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
