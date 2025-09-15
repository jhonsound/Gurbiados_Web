import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { products } from "../../constans";

export const ContainerProduct = ({ selectedProduct, handleOpenModal }) => {
  return (
    <Container sx={{ py: 8, minWidth: "100%" }}>
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0, 0.8)",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" color="white" align="center" gutterBottom>
          Platos disponibles
        </Typography>
        <Grid container spacing={5} sx={{ my: 4 }} justifyContent={"center"}>
          {products.map((product, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 2  }} key={index} sx={{ minWidth: "20%"}}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border:
                    selectedProduct?.title === product.title
                      ? "5px solid #d87512"
                      : "3px solid #ccc",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "2px 6px 15px 5px #d87512",
                  },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardActionArea onClick={() => handleOpenModal(product)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body2" color="text.Secondary">
                      {product.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, fontWeight: "bold" }}
                    >
                      Precio: ${product.price.toLocaleString()} COP
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
