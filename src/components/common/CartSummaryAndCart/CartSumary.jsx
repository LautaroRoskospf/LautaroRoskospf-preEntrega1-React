import { Button, Typography, Box, Stack, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartSummary = () => {
  const { cartClear, getTotalItems, getTotalPrice } = useContext(CartContext);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice().toLocaleString();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Resumen del carrito
      </Typography>
      <Divider sx={{ width: "100%", marginBottom: "20px" }} />
      <Typography variant="body1" gutterBottom>
        Total a pagar: ${totalPrice}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Cantidad total de productos: {totalItems}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
        <Button
          variant="outlined"
          onClick={cartClear}
          startIcon={<DeleteIcon />}
        >
          Vaciar carrito
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/checkout"
          color="primary"
          endIcon={<ShoppingCartIcon />}
        >
          Finalizar Compra
        </Button>
      </Stack>
    </Box>
  );
};
export default CartSummary;
