import { Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemCount = ({ sumar, restar, counter, onAdd }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="300px"
      margin="auto"
    >
      <Box mb={2} display="flex" alignItems="center">
        <Button
          variant="outlined"
          onClick={restar}
          disabled={counter === 1}
          startIcon={<RemoveIcon />}
          sx={{ minWidth: "40px" }}
        >
          Restar
        </Button>
        <Typography variant="h5" component="span" mx={2}>
          {counter}
        </Typography>
        <Button
          variant="outlined"
          onClick={sumar}
          endIcon={<AddIcon />}
          sx={{ minWidth: "40px" }}
        >
          Sumar
        </Button>
      </Box>
      <Button
        variant="contained"
        onClick={() => onAdd(counter)}
        endIcon={<ShoppingCartIcon />}
        sx={{ minWidth: "200px", mt: 2 }}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
