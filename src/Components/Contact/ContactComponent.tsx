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
        backgroundPosition: { md: "bottom left, center, bottom" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            container
            p={1}
            pb={4}
            pr={{ md: 5 }}
            pt={{ md: 5 }}
            xs={12}
            md={6}
          >
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="p"
              fontSize="1.25rem"
            >
              Whether it’s a new API on the back-end or a new toolbar on the
              front-end, as a developer working up and down the stack I build
              and maintain web applications and interfaces that help businesses
              and organizations provide value to their users and meet their
              goals. In addition to my development and coding experience, I’m a
              team leader and I create positive, empathetic work environments
              where teams have the information and support they need to get
              excited about their roles and do their best work, and I break down
              and manage projects in ways that allow us to meet our goals in
              fast-paced settings whether hybrid or remote. I’m also an
              inveterate fixer-of-things, never afraid to lend a hand to a team
              or teammate in need or go outside my job description and roll up
              my sleeves to sort out whatever needs to get done.
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
