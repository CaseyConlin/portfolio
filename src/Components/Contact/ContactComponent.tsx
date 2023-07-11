import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { ContactMasonry } from "./ContactMasonry";
import Planet from "/images/planet-moon.svg";
import Ufo from "/images/ufo.svg";
import Backgroud from "/images/elipse.svg";

import { grey } from "@mui/material/colors";
export const ContactCard = () => {
  return (
    <Box
      py={5}
      sx={{
        zIndex: 100,
        position: "relative",
        backgroundColor: grey[100],
        backgroundImage: `url(${Planet}), url(${Ufo}), url(${Backgroud})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "500px, 150px, 100%",
        backgroundPosition: { md: "bottom left, center , bottom right" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid container p={1} pr={5} pt={5} xs={12} md={6}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="p"
              fontSize="1.25rem"
            >
              Working web development full time is a career augmentation for me,
              but I love writing code and solving problems. I've been working
              developing websites on the side for the last 10 years, and
              building things on the web was always a big part of my day job
              working with libraries and nonprofits. I've worked in and managed
              remote and in-person teams to create really positive environments
              where we can support each in tackling large workloads and have fun
              while we do it. In addition to my own web development business,{" "}
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
