import { Box, CircularProgress, Typography } from "@mui/material";

export const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={80} thickness={4} sx={{ color: "#3f51b5" }} />
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ marginTop: 2, fontWeight: "bold" }}
      >
        Cargando...
      </Typography>
    </Box>
  );
};
