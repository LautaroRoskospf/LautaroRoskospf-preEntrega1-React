import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterContainer from "./components/layout/footer/FooterContainer";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
