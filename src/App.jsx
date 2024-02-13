import FooterContainer from "./components/layout/footer/FooterContainer";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <NavbarContainer />
      <ItemListContainer />
      <FooterContainer />
    </>
  );
};

export default App;
