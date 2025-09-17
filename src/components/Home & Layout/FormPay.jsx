import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const FormPay = ({ selectedProduct }) => {
  const [amount, setAmount] = useState(1);
  return (
    <Container sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 4 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Realiza tu Compra
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Nombre Completo" name="name" color="warning"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Numero de Contacto" name="phone" color="warning"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Direccion de Domicilio"
              name="direction"
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Correo Electronico" name="email" color="warning"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              color="warning"
              value={amount === 0 ? "" : amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              label="Cantidad"
              name="cantidad"
              type="number"
              inputProps={{ min: 1, max: 10 }}
            />
          </Grid>
          {selectedProduct && (
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Has seleccionado: <strong>{selectedProduct.title}</strong>
                </Typography>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography variant="body1" align="center">
                  Precio Total:{" "}
                  <strong>
                    ${((selectedProduct?.price ?? 0) * amount).toLocaleString()}
                    {" "}COP
                  </strong>
                </Typography>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="warning"
              disabled={!selectedProduct}
              size="large"
            >
              Confirmar Compra
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default FormPay;
