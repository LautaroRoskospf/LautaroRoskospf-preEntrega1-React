import { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import { CartContext } from "../../../context/CartContext";
import { linksNavigation } from "../../../router/NavLinksNavigation";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);
  const { getTotalItems } = useContext(CartContext);
  return (
    <>
      <Navbar
        open={open}
        setOpen={setOpen}
        linksNavigation={linksNavigation}
        getTotalItems={getTotalItems}
      />
    </>
  );
};

export default NavbarContainer;
