import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <>
      <Card variant="outlined">
        <CardMedia component="img" image={img} sx={{ objectFit: "cover" }} />
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
            <Button variant="contained">Buy</Button>
            <Button variant="outlined">Info</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};
