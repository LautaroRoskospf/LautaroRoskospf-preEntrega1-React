import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Tooltip,
  Typography,
  Grow,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ProductCard = ({ img, title, description, price, id }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Grow in={true}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 10,
          transition: "transform 0.4s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
          },
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardMedia
          component="img"
          image={img}
          sx={{
            objectFit: "cover",
            filter: "drop-shadow(0 0 10px rgba(0,0,0,0.8))",
            background: "rgba(0,0,0,0.2)",
            transition: "filter 0.3s ease",
          }}
        />
        <CardContent
          sx={{
            background: "rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "background 0.3s ease",
            opacity: hovered ? 1 : 0.9,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              letterSpacing: "1px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography mt={1} sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            ${price}
          </Typography>
          <Typography component="p" variant="body1">
            {description}
          </Typography>
          <CardActions sx={{ width: "90%" }}>
            <Tooltip title="Read more" arrow>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                component={Link}
                to={`/item/${id}`}
                sx={{ width: "100%" }}
              >
                Info
              </Button>
            </Tooltip>
          </CardActions>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </CardContent>
      </Card>
    </Grow>
  );
};
