import { Button } from "@mui/material";

const ItemCount = ({ sumar, restar, counter }) => {
  return (
    <>
      <Button variant="outlined" onClick={restar}>
        Restar
      </Button>
      <span>{counter}</span>
      <Button variant="outlined" onClick={sumar}>
        Sumar
      </Button>
      <Button variant="contained">Agregar al carrito</Button>
    </>
  );
};

export default ItemCount;
