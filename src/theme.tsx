import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Nasa",
      "Varela Round",
      "Varela",
      // "LucidaGrande",
      // "LucidaGrandeBold",
      "Bad Script",
      "Space Grotesk",
    ].join(","),
  },
  palette: {
    buttonFeature: {
      main: red[500],
      contrastText: "#ffffff",
    },
  },
});

export default theme;
