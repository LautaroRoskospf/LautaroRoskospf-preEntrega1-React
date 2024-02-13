import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const ListDrawer = ({ navLinks, cartItemCount }) => {
  return (
    <>
      <Box sx={{ width: 220 }}>
        <nav>
          <List>
            {navLinks.map((item) => (
              <ListItem disablePadding key={item.title}>
                <ListItemButton component="a" href={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>
                    {item.title === "Carrito" ? (
                      <>{cartItemCount}</>
                    ) : (
                      item.title
                    )}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </>
  );
};

export default ListDrawer;
