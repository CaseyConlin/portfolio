//Provide MUI context to compoents in app.
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { WordGame } from "./Components/WordGame/WordGameContainer";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <WordGame />
      </ThemeProvider>
    </>
  );
}

export default App;
