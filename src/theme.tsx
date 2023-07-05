import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Nasa",
      "VarelaRound-Regular",
      "LucidaGrande",
      "LucidaGrandeBold",
    ].join(","),
  },
});

export default theme;
