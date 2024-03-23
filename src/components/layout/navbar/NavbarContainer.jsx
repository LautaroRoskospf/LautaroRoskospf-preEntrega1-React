import { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import { CartContext } from "../../../context/CartContext";
import { navLinks } from "../../../router/navigationlinks";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);
  const { getTotalItems } = useContext(CartContext);
  return (
    <>
      <Navbar
        open={open}
        setOpen={setOpen}
        navLinks={navLinks}
        getTotalItems={getTotalItems}
      />
    </>
  );
};

export default NavbarContainer;
