import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { ContactMasonry } from "./ContactMasonry";
import Planet from "/images/planet-moon.svg";
import Ufo from "/images/ufo.svg";

import { red } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
export const ContactCard = () => {
  const theme = useTheme();

  return (
    <Box
      py={2}
      sx={{
        zIndex: 100,
        position: "relative",
        backgroundColor: grey[100],
        backgroundImage: `url(${Planet}), url(${Ufo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "500px, 150px",
        backgroundPosition: { md: "0% 250%, 40% 50%" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid container p={1} pt={5} xs={12} md={6}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="p"
              fontSize="1.25rem"
            >
              Coding full time is a career augmentation for me, but I love
              writing code and solving problems. I've been working developing
              websites on the side for the last 10 years, and building things on
              the web was always a big part of my day job working with libraries
              and nonprofits. I've worked in and managed remote and in-person
              teams to create really positive environments where we can support
              each in tackling large workloads and have fun while doing it. In
              addition to my own web development business,{" "}
              <a href="https://www.parkcrestdesign.com/" target="_blank">
                Parkcrest Design
              </a>
              , I worked previously in a marketing agency managing clients and
              projects and developing websites.
            </Typography>
          </Grid>
          <Grid container xs={12} md={6}>
            <ContactMasonry />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
