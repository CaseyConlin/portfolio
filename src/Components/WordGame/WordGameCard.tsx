import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "../../App.css";
import { KeyboardContainer } from "./KeyboardContainer";
import { SecretWordContainer } from "./SecretWordContainer";
import { ResetButton } from "./ResetButton";
import { NumberOfLettersSelector } from "./NumberOfLettersSelector";
import { ErrorCountViewer } from "./ErrorCountView";
import { Hint } from "./Hint";
import { grey } from "@mui/material/colors";
import { red } from "@mui/material/colors";

export const WordGameCard = () => {
  return (
    <Card sx={{ m: 2 }}>
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
        <Grid justifyContent="center" xs={7}>
          <KeyboardContainer />
        </Grid>
        <Grid
          container
          flexDirection={"column"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={4}
        >
          <ErrorCountViewer />
          <NumberOfLettersSelector />
          <ResetButton />
        </Grid>
      </Grid>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Use your keyboard or the buttons above to guess letters in the secret
          word like Hangman. Every correct letter gets you a little closer to
          building & launching your rocket, but any missed letter will mean
          another part of the other team's rocket gets put in place. Five missed
          letters, and you lose. Use the control panel to change the number of
          letters for the secret word, and hit reset for a new word. You got
          this!
        </Typography>
      </CardContent>
    </Card>
  );
};
