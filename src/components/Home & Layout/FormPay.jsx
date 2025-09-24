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

const FormPay = ({ selectedProduct, setOrder, order, setOrderData, setOpenSuccess }) => {
  /* const getNumber = () => Math.floor(Math.random() * 1000) + 1; */
  const [amount, setAmount] = useState(1);

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotal = (amount, price) => {
    if (!amount || amount < 1) return price;
    return amount * price;
  };

  const handleSubmit = async () => {
    if (!order.name || !order.phone || !order.email || !order.direction) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
    const orderData = {
      name: order.name,
      phone: order.phone,
      correemailo: order.email,
      direction: order.direction,
      productTitle: selectedProduct.title,
      priceProduct: selectedProduct.price,
      id: selectedProduct.id,
      amount: amount,
      total: calculateTotal(amount, selectedProduct.price),
      identificador_empresa: 1
    };
    setOrderData(orderData);
    setOpenSuccess(true);
    console.log("🚀 ~ handleSubmit ~ orderData:", orderData);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 4 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Realiza tu Compra
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={order.name}
              onChange={handleChange}
              fullWidth
              label="Nombre Completo"
              name="name"
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={order.phone}
              onChange={handleChange}
              label="Numero de Contacto"
              name="phone"
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={order.direction}
              onChange={handleChange}
              label="Direccion de Domicilio"
              name="direction"
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              value={order.email}
              onChange={handleChange}
              label="Correo Electronico"
              name="email"
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              color="warning"
              value={amount === 0 ? "" : amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              label="Cantidad"
              name="amount"
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
                    ${((selectedProduct?.price ?? 0) * amount).toLocaleString()}{" "}
                    COP
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
              onClick={handleSubmit}
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
