import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "../../common/cartwidget/CartWidget";
import ListDrawer from "../drawer/ListDrawer";

export const Navbar = ({ open, setOpen, cartItemCount, navLinks }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            color="inherit"
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              letterSpacing: "2px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            TecnoCenter
          </Typography>
          <IconButton color="inherit">
            <CartWidget itemCount={cartItemCount} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <ListDrawer navLinks={navLinks} cartItemCount={cartItemCount} />
      </Drawer>
    </>
  );
};
