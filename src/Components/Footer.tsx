import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";

import BottomNavigation from "@mui/material/BottomNavigation";
import MUIBottomNavigationAction from "@mui/material/BottomNavigationAction";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

export const Footer = () => {
  const BottomNavigationAction = styled(MUIBottomNavigationAction)({
    ".MuiBottomNavigationAction-label": {
      fontSize: "1.5rem",
      color: "#fff",
    },
  });

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: grey[900],
        color: "#fff",
        p: 6,
      }}
    >
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Grid container justifyContent="center">
          <BottomNavigation
            showLabels
            component="nav"
            sx={{
              backgroundColor: "transparent",
              color: "#fff",
              width: "75%",
            }}

            //   value={value}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
          >
            <BottomNavigationAction label="Work" />
            <BottomNavigationAction label="About" />
            <BottomNavigationAction label="Contact" />
          </BottomNavigation>

          <Grid
            item
            xs={12}
            my={5}
            justifyContent={"center"}
            textAlign="center"
          >
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="800"
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
        </Grid>
      </Container>
      {/* <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          component="nav"
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Grid
            item
            xs={12}
            component="ul"
            flexDirection="row"
            sx={{ listStyle: "none" }}
          >
            <Typography variant="h6" gutterBottom component="li">
              About Us
            </Typography>
            <Typography variant="h6" gutterBottom component="li">
              About Us
            </Typography>
            <Typography variant="body2">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>

          <Grid item xs={12} justifyContent={"center"}>
            <Typography variant="h6" gutterBottom>
              Follow Us
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
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Button color="inherit" href="https://your-website.com/">
              Your Website
            </Button>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container> */}
    </Box>
  );
};
