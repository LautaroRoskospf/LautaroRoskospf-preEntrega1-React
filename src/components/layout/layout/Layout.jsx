import NavbarContainer from "../navbar/NavbarContainer";
import FooterContainer from "../footer/FooterContainer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const navbarHeight = 64;
  const footerHeight = 126.906;
  const minHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <NavbarContainer />
      <div style={{ flex: 1, minHeight: minHeight }}>
        <Outlet />
      </div>
      <FooterContainer />
    </div>
  );
};
