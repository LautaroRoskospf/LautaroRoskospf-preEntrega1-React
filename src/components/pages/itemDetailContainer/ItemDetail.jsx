import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <Grid
        container
        columnSpacing={4}
        sx={{ width: "80%", my: 3, mx: "auto" }}
      >
        <Grid item xs={8}>
          <Card variant="outlined">
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center", mt: 1 }}
            >
              {item.title}
            </Typography>
            <CardMedia
              component="img"
              image={item.img}
              sx={{
                objectFit: "cover",
                width: 400,
                height: 400,
                margin: "auto",
                filter: "drop-shadow(0 0 10px rgba(0,0,0,0.7))",
              }}
            />
            <CardContent>
              <Typography component="p" variant="body1">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sx={{ mt: "20%" }}>
          <ItemCountContainer />
        </Grid>
      </Grid>
    </>
  );
};
