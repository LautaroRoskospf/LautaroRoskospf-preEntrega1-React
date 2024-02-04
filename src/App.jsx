import { CssBaseline } from "@mui/material"
import { Navbar } from "./components/layout/Navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer"

const App = () => {
  return (
    <>
    <CssBaseline />
    <Navbar/>
    <ItemListContainer greeting="Hola, bienvenido a la tienda!"/>
    </>
  )
}

export default App
