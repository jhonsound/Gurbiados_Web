import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Stack,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useOrderStore } from "../store/orders/order.store";

const Client = () => {
  const [tab, setTab] = useState(0);
  const getOrders = useOrderStore((state) => state.getOrders);
  const orders = useOrderStore((state) => state.orders);

  React.useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <Box
      sx={{
        minHeight: "90vh",
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
      <Typography
        variant="h3"
        fontWeight="bold"
        color="primary"
        align="center"
        mb={4}
      >
        Dashboard de Pedidos
      </Typography>
      <Paper
        sx={{
          maxWidth: 1000,
          mx: "auto",
          mb: 4,
          borderRadius: 4,
          boxShadow: 6,
        }}
      >
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Tabla" />
          <Tab label="Cards" />
        </Tabs>
      </Paper>
      {tab === 0 && (
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 1000,
            mx: "auto",
            borderRadius: 4,
            boxShadow: 6,
          }}
        >
          <Table>
            <TableHead sx={{ bgcolor: "warning.light" }}>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Dirección</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((orders, idx) => (
                <TableRow key={idx}>
                  <TableCell>{orders.name}</TableCell>
                  <TableCell>{orders.phone}</TableCell>
                  <TableCell>{orders.email}</TableCell>
                  <TableCell>{orders.direction}</TableCell>
                  <TableCell>{orders.productTitle}</TableCell>
                  <TableCell>{orders.amount}</TableCell>
                  <TableCell>${orders.total.toLocaleString()} COP</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {tab === 1 && (
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: 1000, mx: "auto" }}
        >
          {orders.map((orders, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper
                elevation={8}
                sx={{
                  p: 0,
                  borderRadius: 6,
                  boxShadow: 10,
                  background:
                    "linear-gradient(120deg, #f8fafc 70%, #ffe5b4 100%)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 16,
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    py: 3,
                    px: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                >
                  <Avatar sx={{ bgcolor: "white", width: 60, height: 60 }}>
                    <PersonIcon sx={{ color: "primary.main", fontSize: 40 }} />
                  </Avatar>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="white"
                    sx={{ letterSpacing: 1 }}
                  >
                    {orders.name}
                  </Typography>
                </Box>
                <Stack spacing={2} sx={{ px: 4, py: 3 }}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <PhoneIcon color="warning" sx={{ fontSize: 28 }} />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      {orders.phone}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <EmailIcon color="primary" sx={{ fontSize: 28 }} />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      {orders.email}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <HomeIcon color="primary" sx={{ fontSize: 28 }} />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      {orders.direction}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <ShoppingCartIcon color="warning" sx={{ fontSize: 28 }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={600}
                    >
                      Pedido: <b>{orders.productTitle}</b> x {orders.amount}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      fontWeight={700}
                    >
                      Total: ${orders.total.toLocaleString()} COP
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Client;
