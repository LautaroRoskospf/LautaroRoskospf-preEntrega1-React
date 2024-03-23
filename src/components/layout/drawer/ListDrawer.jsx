import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const ListDrawer = ({ navLinks, setOpen, getTotalItems }) => {
  let totalItems = getTotalItems();
  return (
    <>
      <Box sx={{ width: 240 }}>
        <nav>
          <List disablePadding>
            {navLinks.map((item) => (
              <ListItem
                disablePadding
                key={item.title}
                sx={{
                  transition: "transform 0.8s ease-out",
                  "&:hover": {
                    backgroundColor: "#42a5f5",
                    color: "#f5f5f5",

                    transform: "translateX(10%)",
                    "& .MuiListItemIcon-root": {
                      color: "#f5f5f5",
                    },
                  },
                }}
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>
                    {item.title === "Carrito" ? <>{totalItems}</> : item.title}
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
