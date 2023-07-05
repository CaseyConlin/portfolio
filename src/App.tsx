//Provide MUI context to compoents in app.
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { WordGame } from "./Components/WordGame/WordGameContainer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <WordGame />
      </ThemeProvider>
    </>
  );
}

export default App;
