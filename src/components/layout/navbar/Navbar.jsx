import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "../../common/cartwidget/CartWidget";
import ListDrawer from "../drawer/ListDrawer";
import { Link } from "react-router-dom";

export const Navbar = ({ open, setOpen, linksNavigation, getTotalItems }) => {
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
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              letterSpacing: "2px",
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
              color: "#fff",
              textTransform: "uppercase",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            GamerTech
          </Typography>
          <IconButton color="inherit" component={Link} to="/cart">
            <CartWidget />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <ListDrawer
          linksNavigation={linksNavigation}
          setOpen={setOpen}
          getTotalItems={getTotalItems}
        />
      </Drawer>
    </>
  );
};
