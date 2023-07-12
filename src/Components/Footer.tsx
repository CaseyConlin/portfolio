import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

const links = [
  { label: "About/Contact", link: "#about" },
  { label: "Selected Work", link: "#works" },
];
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: grey[900],
        color: "#fff",
        p: 6,
      }}
    >
      <Container maxWidth="xl" sx={{ marginTop: 5 }}>
        <Box>
          <Toolbar
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              my: 2,
            }}
          >
            {links.map((link) => (
              <Button
                key={link.label}
                component={Link}
                href={link.link}
                sx={{
                  color: "#fff",
                  display: "block",
                  fontSize: "1.25rem",

                  textTransform: "none",
                }}
              >
                {link.label}
              </Button>
            ))}
          </Toolbar>
        </Box>
        <Grid item xs={12} my={5} justifyContent={"center"} textAlign="center">
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="500"
            sx={{ marginBottom: 1 }}
          >
            Connect
          </Typography>
          <Button
            href="https://github.com/CaseyConlin/"
            color="inherit"
            target="_blank"
          >
            <GitHub fontSize="large" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/caseyconlin/"
            color="inherit"
            sx={{ pl: 1, pr: 1 }}
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </Button>
          <Button
            href="mailto:casey.conlin@gmail.com"
            color="inherit"
            target="_blank"
          >
            <Email fontSize="large" />
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};
