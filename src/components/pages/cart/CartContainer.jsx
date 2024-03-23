import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Alert, Box, Grid } from "@mui/material";
import { CardCart } from "../../common/CartSummaryAndCart/CardCart";
import CartSummary from "../../common/CartSummaryAndCart/CartSumary";

export const CartContainer = () => {
  const { cart, removeById } = useContext(CartContext);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        {cart.length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            marginTop={3}
          >
            <Alert severity="info">¡Tu carrito está vacío!</Alert>
          </Box>
        ) : (
          cart.map((product) => (
            <CardCart
              key={product.id}
              product={product}
              removeById={removeById}
            />
          ))
        )}
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: 8 }}>
        <CartSummary />
      </Grid>
    </Grid>
  );
};
