import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Drawer from "@mui/material/Drawer";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "../../App.css";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { KeyboardContainer } from "./KeyboardContainer";
import { SecretWordContainer } from "./SecretWordContainer";
import { ResetButton } from "./ResetButton";
import { NumberOfLettersSelector } from "./NumberOfLettersSelector";
import { ErrorCountViewer } from "./ErrorCountView";
import { Hint } from "./Hint";
import { grey } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";

export const WordGameCard = () => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpened(isOpen);
    };

  return (
    <Card sx={{ m: { xs: 1, sm: 2 } }}>
      <CardHeader
        titleTypographyProps={{
          variant: "h2",
          fontFamily: "Nasa",
          fontWeight: 200,
        }}
        subheaderTypographyProps={{
          color: "#fff",
          fontSize: "1rem",
          fontWeight: 600,
          variant: "h2",
        }}
        sx={{
          color: "#fff",
          bgcolor: red[400],
          p: 2,
          mb: 5,
          fontSize: "2.5rem",
        }}
        avatar={
          <Avatar
            sx={{
              bgcolor: "#fff",
              color: red[500],
              width: "56px",
              height: "56px",
            }}
            aria-label="rocket icon"
          >
            <RocketLaunchIcon fontSize="large" />
          </Avatar>
        }
        title="LIFT_FF"
        subheader="Guess the letters in the word below to build & launch our rocket before the other team!"
      />
      <Box sx={{ p: { xs: 0 }, mx: -2, justifyContent: "center" }}>
        <SecretWordContainer />
        <Hint />
      </Box>
      <Grid
        className="input-grid"
        container
        py={1}
        justifyContent={"center"}
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: grey[200],
          boxShadow: "1px -1px 3px  #212121 ",
        }}
      >
        <Grid justifyContent="center" xs={12} md={7}>
          <KeyboardContainer />
        </Grid>
        <Grid
          container
          flexDirection={{ xs: "row", md: "column" }}
          flexWrap={"wrap"}
          justifyContent={{ xs: "space-around", md: "flex-start" }}
          xs={12}
          md={4}
        >
          <ErrorCountViewer />
          <NumberOfLettersSelector />
          <ResetButton />
        </Grid>
      </Grid>
      <CardActions onClick={toggleDrawer(true)}>
        <Button sx={{ color: "#000" }}>
          <VideogameAssetIcon fontSize="large" sx={{ paddingRight: "10px" }} />
          <Typography> Game Info</Typography>
          <KeyboardArrowRightIcon />
        </Button>
      </CardActions>
      <Drawer
        anchor="right"
        PaperProps={{
          sx: {
            width: { xs: "65%", sm: "45%", lg: "40%" },
            p: { xs: 2, sm: 3 },
            pb: 4,
          },
        }}
        open={opened}
        onClose={toggleDrawer(false)}
      >
        <Typography variant="h4" color="text.primary">
          About{" "}
          <Box component="span" sx={{ fontFamily: "Nasa", fontSize: "2.5rem" }}>
            LIFT_FF
          </Box>
        </Typography>
        <Typography variant="h5" color="text.primary" pt={2}>
          Gameplay
        </Typography>
        <Typography variant="body2" color="text.primary">
          [radio squeal noise] Use your keyboard or the buttons above to guess
          the letters in the secret word like Hangman. Every correct letter gets
          you a little closer to building & launching your rocket, but any
          missed letter will mean another part of the other team's rocket gets
          put in place and they get closer to launching. Five missed letters,
          and we lose. Use the control panel to change the number of letters for
          the secret word, and hit the reset button for a new word. You got
          this! Over and out. [radio squeal noise]
        </Typography>
        <Typography variant="h5" color="text.primary" pt={2}>
          Development
        </Typography>
        <Typography variant="body2" color="text.primary">
          Like this website the game is built using React and TypeScript. Many
          of the components manage their own state with React Context helping
          keep everything in sync. The words and hints come from API calls to{" "}
          <a href="www.wordsapi.com" target="_blank">
            Words API
          </a>{" "}
          using Axios. Components are styled using Material UI with some
          exceptions. Animations are managed with the Framer Motion library. You
          can check out the{" "}
          <a href="https://github.com/CaseyConlin/portfolio" target="_blank">
            {" "}
            repo here
          </a>
          . Best of luck, and I hope you enjoy the game!
        </Typography>
        <Typography variant="h5" color="text.primary" pt={2}>
          About the Developer
        </Typography>
        <Typography variant="body2" color="text.primary">
          My name is Casey Conlin. I grew up playing video games and I'm
          helplessly drawn to puzzles and word games, so the conception, design,
          and development of this game was a lot of fun for me! I'm a frontend
          developer with experience building applications and web pages with
          React, JavaScript, PHP, and CSS. I've worked in nonprofits and
          libraries over 10 years as a team leader and consultant specializing
          in technology, marketing, project management, strategic planning, and
          more, but I've always been working on web development through my web
          design and development company,{" "}
          <a href="https://www.parkcrestdesign.com/" target="_blank">
            Parkcrest Design
          </a>
          . If you have any questions, or just want to connect, please feel free
          to reach out! Thanks for visiting the website!
        </Typography>
        <Typography variant="h5" color="text.primary" pt={2}>
          Contact
        </Typography>
        <Stack direction="row" p={0} spacing={0}>
          <IconButton
            color="primary"
            href="https://www.linkedin.com/in/caseyconlin/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="https://github.com/CaseyConlin/"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="mailto:casey.conlin@gmail.com"
            target="_blank"
            aria-label="email"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Drawer>
    </Card>
  );
};
