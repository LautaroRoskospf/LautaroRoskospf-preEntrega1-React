import { Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <>
      <footer>
        <Divider />
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            container
            justifyContent="center"
            spacing={2}
            sx={{ mb: 1, mt: 1 }}
          >
            <Grid item>
              <Link href="https://www.facebook.com" target="_blank">
                <IconButton sx={{ color: "#3b5998" }}>
                  <FacebookIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.twitter.com" target="_blank">
                <IconButton sx={{ color: "#333333" }}>
                  <XIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.instagram.com" target="_blank">
                <IconButton sx={{ color: "#c13584" }}>
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="overline" sx={{ color: "rgba(0, 0, 0, 0.5)" }}>
              © 2024 TecnoCenter All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
