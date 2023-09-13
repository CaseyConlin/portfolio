import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "../../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";

interface Props {
  isDrawerOpen: boolean;
  toggleDrawer: (
    isOpen: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export const WordGameCardDrawer = (props: Props) => {
  return (
    <Drawer
      open={props.isDrawerOpen}
      onClose={props.toggleDrawer(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: { xs: "65%", sm: "45%", lg: "40%" },
          p: { xs: 2, sm: 3 },
          pb: 4,
        },
      }}
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
        <i>[radio squeal noise]</i> Use your keyboard or the buttons on-screen
        to guess the letters in the secret word like Hangman. Every correct
        letter gets you a little closer to building & launching your rocket, but
        any missed letter will mean another part of the other team's rocket gets
        put in place and they get closer to launching. Five missed letters, and
        we lose. Use the control panel to change the number of letters for the
        secret word, and hit the reset button for a new word. You got this! Over
        and out. <i>[radio squeal noise]</i>
      </Typography>
      <Typography variant="h5" color="text.primary" pt={2}>
        Development
      </Typography>
      <Typography variant="body2" color="text.primary">
        Like this website the game is built using React and TypeScript, along
        with some full stack API work to manage scores. Initially built to take
        advantage of the useContext hook to manage state across several
        components, the game was refactored to use a component composition model
        to flatten the app and concentrate state management and logic in a
        parent component. The words and hints come from API calls to{" "}
        <a href="www.wordsapi.com" target="_blank">
          Words API
        </a>
        . Many UI components come from the Material UI library with some
        exceptions. Animations are managed with the Framer Motion library.
        Components and functionality are tested with Vitest, Playwright, and
        Mock Service Worker. The high score component uses an API powered by
        Express that connects to a MongoDB database with some help from
        Mongoose. Deployment is managed with Docker on Fly.io. You can check out
        the{" "}
        <a href="https://github.com/CaseyConlin/portfolio" target="_blank">
          repo here
        </a>
        . Best of luck out there, and I hope you enjoy the game!
      </Typography>
      <Typography variant="h5" color="text.primary" pt={2}>
        About the Developer
      </Typography>
      <Typography variant="body2" color="text.primary">
        My name is Casey Conlin. I grew up playing video games and I'm
        helplessly drawn to puzzles and word games, so the conception, design,
        and development of this game was a lot of fun for me! I'm a frontend
        developer with experience building applications and web pages with
        React, JavaScript, PHP, and CSS. I've worked in nonprofits and libraries
        over 10 years as a team leader and consultant specializing in
        technology, marketing, project management, strategic planning, and more,
        but I've always been working on web development through my web design
        and development company,{" "}
        <a href="https://www.parkcrestdesign.com/" target="_blank">
          Parkcrest Design
        </a>
        . If you have any questions, or just want to connect, please feel free
        to reach out! Thanks for visiting the website!
      </Typography>
      <Typography variant="h5" color="text.primary" pt={2}>
        Contact
      </Typography>
      <Stack direction="row" p={0} spacing={0} color={red[600]}>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/caseyconlin/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/CaseyConlin/"
          target="_blank"
          aria-label="GitHub"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="inherit"
          href="mailto:casey.conlin@gmail.com"
          target="_blank"
          aria-label="email"
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Drawer>
  );
};
