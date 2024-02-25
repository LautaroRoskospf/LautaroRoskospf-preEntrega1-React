import { useState } from "react";
import { Navbar } from "./Navbar";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import MouseIcon from "@mui/icons-material/Mouse";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import HeadphonesIcon from "@mui/icons-material/Headphones";

const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <LoginIcon />,
  },
  {
    title: "Mouses",
    path: "/category/mouses",
    icon: <MouseIcon />,
  },
  {
    title: "Keyboards",
    path: "/category/keyboards",
    icon: <KeyboardIcon />,
  },
  {
    title: "Headphones",
    path: "/category/headphones",
    icon: <HeadphonesIcon />,
  },
  {
    title: "Carrito",
    path: "/cart",
    icon: <ShoppingCartIcon color="inherit" />,
  },
];

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(5);

  return (
    <>
      <Navbar
        open={open}
        setOpen={setOpen}
        cartItemCount={cartItemCount}
        navLinks={navLinks}
      />
    </>
  );
};

export default NavbarContainer;
