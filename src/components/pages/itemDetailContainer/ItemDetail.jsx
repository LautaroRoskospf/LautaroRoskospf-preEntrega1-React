import { Alert, Box, Grid } from "@mui/material";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import { CardDetail } from "../../common/cardDetail/CardDetail";

export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <Grid container spacing={4} sx={{ width: "80%", my: 3, mx: "auto" }}>
      <Grid item xs={12} md={8}>
        <CardDetail item={item} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Box textAlign="center" mt={2} mb={2}>
          {initial ? (
            <Alert severity="success">Cantidad en el carrito: {initial}</Alert>
          ) : (
            <Alert severity="info">No hay unidades en el carrito</Alert>
          )}
        </Box>
        <ItemCountContainer
          onAdd={onAdd}
          stock={item.stock}
          initial={initial}
        />
      </Grid>
    </Grid>
  );
};
