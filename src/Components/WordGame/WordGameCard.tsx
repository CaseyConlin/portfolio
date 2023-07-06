import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
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
        <Typography>Play Info</Typography>
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
          <Typography variant="body2" color="text.secondary">
            Use your keyboard or the buttons above to guess letters in the
            secret word like Hangman. Every correct letter gets you a little
            closer to building & launching your rocket, but any missed letter
            will mean another part of the other team's rocket gets put in place.
            Five missed letters, and you lose. Use the control panel to change
            the number of letters for the secret word, and hit reset for a new
            word. You got this!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
