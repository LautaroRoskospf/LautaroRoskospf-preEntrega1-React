import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const CardDetail = ({ item }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Typography variant="h4" sx={{ mt: 1, fontWeight: "bold" }}>
        {item.title}
      </Typography>
      <CardMedia
        component="img"
        image={item.img}
        sx={{
          objectFit: "contain",
          width: "70%",
          height: 300,
          margin: "auto",
          filter: "drop-shadow(0 0 10px rgba(0,0,0,0.7))",
        }}
      />
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
          Precio: ${item.price}
        </Typography>
        <Typography variant="body1">{item.info}</Typography>
      </CardContent>
    </Card>
  );
};
