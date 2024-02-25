import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ img, title, description, price, id }) => {
  return (
    <>
      <Card variant="outlined">
        <CardMedia
          component="img"
          image={img}
          sx={{
            objectFit: "cover",
            filter: "drop-shadow(0 0 10px rgba(0,0,0,0.8))",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography component="p" variant="body2" sx={{ mb: 1.5 }}>
            {description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 3.5 }}>
            ${price}
          </Typography>
          <CardActions sx={{ padding: 0, mt: 1 }}>
            <Button variant="outlined" component={Link} to={`/item/${id}`}>
              Info
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};
