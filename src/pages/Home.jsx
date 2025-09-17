import { Box } from "@mui/material";
import React, { useState } from "react";
import { Logo } from "../components/Home & Layout/Logo";
import FormPay from "../components/Home & Layout/FormPay";
import { ContainerProduct } from "../components/Home & Layout/ContainerProduct";
import { ModalProduct } from "../components/Home & Layout/ModalProduct";

export function Home() {
  const [modalDescription, setModalDescription] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (product) => {
    setModalDescription(product);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setModalDescription(null);
    setOpenModal(false);
  };

  /* const first = (second) => {}; */

  return (
    <Box
      sx={{
        backgroundImage: "url(/src/assets/guabidos1.jpeg)",
        backgroundSize: "cover",
        minHeight: "90vh",
      }}
    >
      <Logo />

      <ContainerProduct
        selectedProduct={selectedProduct}
        handleOpenModal={handleOpenModal}
      />

      <ModalProduct
        setSelectedProduct={setSelectedProduct}
        modalDescription={modalDescription}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />

      <FormPay selectedProduct={selectedProduct}/>
      
    </Box>
  );
}
