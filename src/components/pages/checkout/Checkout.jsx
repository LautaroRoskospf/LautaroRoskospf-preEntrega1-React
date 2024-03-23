import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";

export const Checkout = ({ enviarFormulario, capturar }) => {
  return (
    <div>
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "70%" },
          margin: "auto",
          textAlign: "center",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={enviarFormulario}>
          <TextField
            label="Nombre"
            placeholder="Ingrese su nombre"
            onChange={capturar}
            name="name"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Teléfono"
            placeholder="Ingrese su teléfono"
            onChange={capturar}
            name="phone"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Email"
            placeholder="Ingrese su email"
            onChange={capturar}
            name="email"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            type="email"
          />
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button
              component={Link}
              to={"/"}
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIcon />}
            >
              Seguir Comprando
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<CheckIcon />}
            >
              Finalizar Compra
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};
