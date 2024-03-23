import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const CardCart = ({ product, removeById }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        marginTop: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.img}
        alt={product.title}
        sx={{
          objectFit: "contain",
          filter: "drop-shadow(0 0 5px rgba(0,0,0,0.8))",
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", mb: 1 }}>
          Precio: ${product.price}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Cantidad: {product.quantity}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton
          aria-label="Eliminar"
          onClick={() => removeById(product.id)}
          style={{ color: "#f44336" }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
