import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import CartWidget from "../common/CartWidget"
import { NavListDrawer } from "./NavListDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const navLinks= [
    {
        title: "Home", 
        path: "#",
        icon: <ArrowForwardIosIcon/>
    },
    {
        title: "Login", 
        path: "#",
        icon: <ArrowForwardIosIcon/>
    }, 
    {
        title: "Categorias", 
        path: "#",
        icon: <ArrowForwardIosIcon/>
    },
    {
        title: "Carrito",
        path: "#",
        icon: <ShoppingCartIcon color="inherit" />,
    },

]

export const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(5);


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{display: {xs: "flex", sm: "none"}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{flexGrow: 1}}>RacingTeam</Typography>
                    
                    <Box sx={{ display: {xs: "none", sm: "block"}}}>
                    {
                        navLinks.map(item => (
                            item.title !== "Carrito" &&
                            <Button 
                            color="inherit" 
                            key={item.title}
                            component="a"
                            href={item.path}
                            >
                                {item.title}
                            </Button>

                        ))
                    }
            <Button  color="inherit" href="#">
            <CartWidget itemCount={cartItemCount} />
            </Button>

                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
            open={open}
            anchor="left"
            onClose={() => setOpen(false)}
            sx={{display: {xs: "flex", sm: "none"}}}
            >
            <NavListDrawer navLinks={navLinks} onCloseDrawer={() => setOpen(false)} cartItemCount={cartItemCount}/>
            </Drawer>
        </>
    )
}
