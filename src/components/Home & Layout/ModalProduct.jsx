import { Button, Card, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import React from "react";

export const ModalProduct = ({
  setSelectedProduct,
  modalDescription,
  openModal,
  handleCloseModal,
}) => {
  return (
    <>
      {modalDescription && (
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>{modalDescription.title}</DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              {modalDescription.description}
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {modalDescription.galery.map((img, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{ minWidth: "18%" }}
                  key={index}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      height={"120"}
                      sx={{ objectFit: "cover", minWidth: "100%" }}
                      image={img}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button color="white" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button
              color="warning"
              onClick={() => {
                setSelectedProduct(modalDescription);
                handleCloseModal();
              }}
              variant="contained"
            >
              Comprar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
