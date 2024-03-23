import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Badge } from "@mui/material";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <>
      <Badge badgeContent={totalItems} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </>
  );
};

export default CartWidget;
