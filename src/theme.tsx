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
      "VarelaRound-Regular",
      "LucidaGrande",
      "LucidaGrandeBold",
      "BadScript-Regular",
    ].join(","),
  },
  palette: {
    // primary: {
    //   main: '#0971f1',
    //   darker: '#053e85',
    // },
    buttonFeature: {
      main: red[500],
      contrastText: "#fff",
    },
  },
});

export default theme;
