import HomeIcon from "@mui/icons-material/Home";
import MouseIcon from "@mui/icons-material/Mouse";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import HeadphonesIcon from "@mui/icons-material/Headphones";

export const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
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
