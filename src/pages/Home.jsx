import { ContainerProduct } from "../components/Home & Layout/ContainerProduct";
import { ModalProduct } from "../components/Home & Layout/ModalProduct";
import FormPay from "../components/Home & Layout/FormPay";
import { Logo } from "../components/Home & Layout/Logo";
import { useState } from "react";
import { Box } from "@mui/material";
import ModalOrder from "./ModalOrder";

export function Home() {
  const [modalDescription, setModalDescription] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [orderData, setOrderData] = useState(false);
  const [openModalProduct, setOpenModalProduct] = useState(false);

  const [order, setOrder] = useState({
    name: "",
    phone: "",
    email: "",
    amount: 1,
    total: 0,
    direction: "",
  });

  const handleOpenModal = (product) => {
    setModalDescription(product);
    setOpenModalProduct(true);
  };
  const handleCloseModal = () => {
    setModalDescription(null);
    setOpenModalProduct(false);
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
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
      <Logo />

      <ContainerProduct
        selectedProduct={selectedProduct}
        handleOpenModal={handleOpenModal}
      />

      <ModalProduct
        setSelectedProduct={setSelectedProduct}
        modalDescription={modalDescription}
        openModal={openModalProduct}
        handleCloseModal={handleCloseModal}
      />

      <FormPay
        selectedProduct={selectedProduct}
        order={order}
        setOrder={setOrder}
        setOrderData={setOrderData}
        setOpenSuccess={setOpenSuccess}
      />

      <ModalOrder
        order={orderData}
        open={openSuccess}
        handleClose={() => setOpenSuccess(false)}
      />
    </Box>
  );
}
