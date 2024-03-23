import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dslgzt7p3/image/upload/v1710732691/13315300_5203299_uokbgb.jpg)`,
        backgroundSize: "contain",
        backgroundPosition: "center",

        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ mb: 4 }}
      >
        Ir al inicio
      </Button>
    </div>
  );
};

export default NotFound;
