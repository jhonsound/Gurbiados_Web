import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NumbersIcon from '@mui/icons-material/Numbers';

const ModalOrder = ({ open, handleClose, order }) => {
  if (!order) return null;

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #f8fafc 60%, #ffe5b4 100%)',
          boxShadow: 8,
          borderRadius: 5,
        }
      }}
    >
      <DialogTitle sx={{ textAlign: "center", py: 3, position: 'relative' }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <CheckCircleIcon sx={{ color: 'success.main', fontSize: 40, mb: 1 }} />
          <Typography variant="h5" fontWeight="bold" color="primary">
            ¡Resumen de Pedido
          </Typography>
          <Typography variant="body1" color="success.main" fontWeight="bold">
            ¡Exitoso!
          </Typography>
        </Box>
      </DialogTitle>

      <Divider sx={{ mb: 2, bgcolor: 'grey.300' }} />

      <DialogContent sx={{ p: 4, bgcolor: "transparent" }}>
        {/* Sección de Información del Cliente */}
        <Stack spacing={2} mb={3}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="primary"
            mb={1}
            sx={{ letterSpacing: 1 }}
          >
            INFORMACIÓN DEL CLIENTE
          </Typography>
          <Paper elevation={2} sx={{ p: 2.5, borderRadius: 3, background: 'linear-gradient(90deg, #f8fafc 80%, #ffe5b4 100%)' }}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <PersonIcon color="primary" />
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 80 }}>
                  Nombre:
                </Typography>
                <Typography variant="body1" color="warning.main" fontWeight="bold">{order?.name}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <EmailIcon color="primary" />
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 80 }}>
                  Correo:
                </Typography>
                <Typography variant="body1" color="warning.main" fontWeight="bold">{order.email}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <PhoneIcon color="primary" />
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 80 }}>
                  Teléfono:
                </Typography>
                <Typography variant="body1" color="warning.main" fontWeight="bold">{order.phone}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <HomeIcon color="primary" />
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 80 }}>
                  Dirección:
                </Typography>
                <Typography variant="body1" color="warning.main" fontWeight="bold">{order.direction}</Typography>
              </Box>
            </Stack>
          </Paper>
        </Stack>

        <Divider sx={{ my: 2, bgcolor: 'grey.200' }} />

        {/* Sección de Detalles del Pedido */}
        <Stack spacing={2} my={3}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="primary"
            mb={1}
            sx={{ letterSpacing: 1 }}
          >
            DETALLE DE LA ORDEN
          </Typography>
          <Paper elevation={2} sx={{ p: 2.5, borderRadius: 3, background: 'linear-gradient(90deg, #f8fafc 80%, #ffe5b4 100%)' }}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 80 }}>
                  <b>ID Producto:</b>
                </Typography>
                <Typography variant="body1" fontWeight="bold" color="warning.main">{order.productId}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <ShoppingCartIcon color="warning" />
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 80 }}>
                  Producto:
                </Typography>
                <Typography variant="body1" color="warning.main" fontWeight="bold">{order.name}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <NumbersIcon color="warning" />
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 80 }}>
                  Cantidad:
                </Typography>
                <Typography variant="body1" color="warning.main" fontWeight="bold">{order.amount}</Typography>
              </Box>
            </Stack>
          </Paper>
        </Stack>

        <Divider sx={{ my: 2, bgcolor: 'grey.200' }} />

        {/* Sección de Total */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography variant="h5" fontWeight="bold" color="primary" sx={{ letterSpacing: 2 }}>
            TOTAL:
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="warning.main"
            sx={{ letterSpacing: 2, textShadow: '0 2px 8px #ffe5b4' }}
          >
            ${order.total.toLocaleString('es-CO')}
          </Typography>
        </Box>
      </DialogContent>

      <Button
        onClick={handleClose}
        variant="contained"
        color="warning"
        sx={{
          m: 3,
          borderRadius: 3,
          fontWeight: 'bold',
          fontSize: 18,
          px: 5,
          py: 1.5,
          boxShadow: 3,
          transition: 'all 0.2s',
          '&:hover': {
            bgcolor: 'warning.dark',
            color: 'white',
            boxShadow: 6,
          },
        }}
      >
        Cerrar
      </Button>
    </Dialog>
  );
};

export default ModalOrder;