import { useState } from "react";
import { useGameContext } from "./WordGameContext";
import { getNewWord } from "../../Services/getNewWord";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const ResetButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const ResetButtonWrapper = styled(Button)({
    // boxShadow: 'none',
    // textTransform: 'none',
    // fontSize: 16,
    // padding: '6px 12px',
    // border: '1px solid',
    // lineHeight: 1.5,
    // backgroundColor: '#0063cc',
    // borderColor: '#0063cc',
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    "&:hover": {
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  const {
    setSecretWord,
    resetScores,
    errorCount,
    guessedLetters,
    numberOfLetters,
  } = useGameContext();

  const clickHandler = () => {
    resetScores();

    getNewWord(numberOfLetters).then((response) => {
      console.log(response);
      response && setSecretWord(response.word, response.hint);
    });

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 250);
    console.log(errorCount);
    console.log(guessedLetters);
  };
  return (
    <Grid
      px={2}
      py={1}
      lineHeight={1.25}
      m={0}
      bgcolor="white"
      boxShadow={1}
      sx={{
        border: "1px solid black",
        boxShadow: "1px -1px 4px  #212121 ",
      }}
      borderRadius={1}
      container
      flexDirection={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      xs={12}
    >
      <Box
        sx={{
          marginRight: "10px",
          fontSize: "1.25rem",
          display: "block",
          padding: "2px 0px",
          textAlign: "center",
          textTransform: "uppercase",
          typography: "subtitle1",
          fontFamily: "LucidaGrandeBold",
        }}
      >
        New Word
      </Box>
      <ResetButtonWrapper
        variant="contained"
        size="large"
        sx={{
          minWidth: "50px",
          backgroundColor: red[900],
          border: "1px solid black ",
          borderRadius: "50%",
          padding: "0",
          width: "55px",
          height: "55px",
          boxShadow: "1px -1px 4px  #212121 ",
        }}
      >
        <span
          onClick={clickHandler}
          style={{
            padding: "0",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            width: isClicked ? "53px" : "53px",
            height: isClicked ? "53px" : "53px",
            borderRadius: "50%",
            border: "1px solid blue",
            fontSize: " .85rem",
            background: red[600],
            color: "#fff",
            transform: isClicked ? "translateY(0px)" : "translateY(-2px)",
            fontFamily: "LucidaGrandeBold",
            boxShadow: "1px -1px 4px  #212121",
          }}
        >
          Reset
        </span>
      </ResetButtonWrapper>
    </Grid>
  );
};
