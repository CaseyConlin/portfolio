import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "../../App.css";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { KeyboardContainer } from "./KeyboardContainer";
import { SecretWordContainer } from "./SecretWordContainer";
import { ResetButton } from "./ResetButton";
import { NumberOfLettersSelector } from "./NumberOfLettersSelector";
import { ErrorCountViewer } from "./ErrorCountView";
import { WordGameCardDrawer } from "./WordGameCardDrawer";
import { Hint } from "./Hint";
import { grey } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const WordGameCard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(isOpen);
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
      <CardActions onClick={() => setIsDrawerOpen(true)}>
        <Button sx={{ color: "#000" }}>
          <VideogameAssetIcon fontSize="large" sx={{ paddingRight: "10px" }} />
          <Typography> Game Info</Typography>
          <KeyboardArrowRightIcon />
        </Button>
      </CardActions>
      <WordGameCardDrawer
        toggleDrawer={toggleDrawer}
        isDrawerOpen={isDrawerOpen}
      />
    </Card>
  );
};
