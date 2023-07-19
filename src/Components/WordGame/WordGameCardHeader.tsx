import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "../../App.css";
import { red } from "@mui/material/colors";

export const WordGameCardHeader = () => {
  return (
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
        mb: 1,
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
  );
};
