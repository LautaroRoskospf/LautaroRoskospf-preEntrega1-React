import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export const NavListDrawer = ({navLinks,onCloseDrawer, cartItemCount}) => {
    return (
    <Box sx={{width: 250, bgcolor: "lightblue"}}>
        <nav>
            <List>
                {
                    navLinks.map(item => (
                <ListItem 
                disablePadding 
                key={item.title}
                onClick={onCloseDrawer}
                >
                    <ListItemButton  
                    component="a"
                    href={item.path}
                    >
                        <ListItemIcon >{item.icon}</ListItemIcon>
                        <ListItemText >{item.title === 'Carrito' ? <>{cartItemCount}</> : item.title}</ListItemText>
                    </ListItemButton>
                </ListItem>
                    ))
                }
            </List>
        </nav>
    </Box>
)
}
