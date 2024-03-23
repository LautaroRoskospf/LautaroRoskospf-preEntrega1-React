import { Grid, IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterContainer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1976d2",
        padding: "15px 0",
        color: "#fff",
        marginTop: "25px",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Link href="https://www.facebook.com" target="_blank" sx={{ mr: 2 }}>
            <IconButton sx={{ color: "#fff" }}>
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href="https://www.twitter.com" target="_blank" sx={{ mr: 2 }}>
            <IconButton sx={{ color: "#fff" }}>
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <IconButton sx={{ color: "#fff" }}>
              <InstagramIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              letterSpacing: "2px",
              fontWeight: "bold",
              color: "#fff",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            GamerTech
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="overline"
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            © {new Date().getFullYear()} GamerTech. Todos los derechos
            reservados.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterContainer;
