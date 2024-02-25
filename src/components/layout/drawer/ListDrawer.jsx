import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const ListDrawer = ({ navLinks, cartItemCount, setOpen }) => {
  return (
    <>
      <Box sx={{ width: 220 }}>
        <nav>
          <List>
            {navLinks.map((item) => (
              <ListItem disablePadding key={item.title}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
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
