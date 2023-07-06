import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const WordGameCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
          justifyContent={{ xs: "space-around", sm: "flex-start" }}
          xs={12}
          sm={4}
        >
          <ErrorCountViewer />
          <NumberOfLettersSelector />
          <ResetButton />
        </Grid>
      </Grid>
      <CardActions>
        <VideogameAssetIcon fontSize="large" sx={{ paddingRight: "10px" }} />
        <Typography> Game Info</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5" color="text.primary">
            Gameplay
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Use your keyboard or the buttons above to guess letters in the
            secret word like Hangman. Every correct letter gets you a little
            closer to building & launching your rocket, but any missed letter
            will mean another part of the other team's rocket gets put in place.
            Five missed letters, and you lose. Use the control panel to change
            the number of letters for the secret word, and hit reset for a new
            word. You got this!
          </Typography>
          <Typography variant="h5" color="text.primary" pt={2}>
            Development
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Like this website, the game, Liftoff, is built using React and
            TypeScript. Many of the components manage their own state with React
            Context helping keep everyting in sync. The words and hints come
            from API calls to{" "}
            <a href="www.wordsapi.com" target="_blank">
              Words API
            </a>{" "}
            using Axios. Components are styled using Material UI with some
            exceptions. Animations are managed with the Framer Motion library.
            You can check out the{" "}
            <a href="https://github.com/CaseyConlin/portfolio" target="_blank">
              {" "}
              repo here
            </a>
            . Best of luck, and I hope you enjoy the game!
          </Typography>
          <Typography variant="h5" color="text.primary" pt={2}>
            About the Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            My name is Casey Conlin. I grew up playing video games and I'm
            helplessly drawn to puzzles and word games, so the concpetion,
            design, and devlopment of this game was a lot of fun for me! I'm a
            frontend developer with experience building applications and
            webpages with React, JavaScript, PHP, and CSS. I've worked in
            nonprofits and libraries over 10 years as a team leader and
            consultant specializing in technology, marketing, project
            management, strategic planning, and more, but I've always been
            working on web development through my web design and development
            company,{" "}
            <a href="https://www.parkcrestdesign.com/" target="_blank">
              Parkcrest Design
            </a>
            . If you have any question, or just want to connect, please feel
            free to reach out! Thanks for vising the website!
          </Typography>

          <Typography variant="h5" color="text.primary" pt={2}>
            Contact
          </Typography>
          <Stack direction="row" p={0} spacing={0}>
            <Button
              href="https://www.linkedin.com/in/caseyconlin/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </Button>
            <Button href="https://github.com/CaseyConlin/" target="_blank">
              <GitHubIcon fontSize="large" />
            </Button>
            <Button href="mailto:casey.conlin@gmail.com" target="_blank">
              <EmailIcon fontSize="large" />
            </Button>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
};
