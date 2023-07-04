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

  const ResetButton = styled(Button)({
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
      boxShadow: "1px -1px 0px  #212121 ",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    fontFamily: "LucidaGrandeBold",
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
      response && setSecretWord(response.word, response.hint);
    });

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 250);
  };
  return (
    <Grid
      px={2}
      py={1}
      lineHeight={1.25}
      m={0}
      bgcolor="white"
      sx={{
        border: "1px solid black",
        boxShadow: "1px -1px 4px  #212121 ",
        fontFamily: "LucidaGrandeBold",
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
      <Box
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        sx={{
          minWidth: "50px",
          backgroundColor: red[900],
          border: "1px solid black ",
          borderRadius: "50%",
          padding: "0",
          width: "55px",
          height: "55px",

          // boxShadow: "1px -1px 4px  #212121 ",
        }}
      >
        <ResetButton
          onClick={clickHandler}
          style={{
            padding: "0",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "50px",
            minHeight: "50px",
            width: isClicked ? "53px" : "53px",
            height: isClicked ? "53px" : "53px",
            borderRadius: "50%",
            border: "1px solid black",
            fontSize: " .8rem",
            background: red[600],
            color: "#fff",

            transform: isClicked ? "translateY(0px) " : "translateY(-2px) ",
            font: "LucidaGrandeBold",
            boxShadow: isClicked
              ? "1px -1px 2px  #212121"
              : "1px -1px 4px  #212121",
          }}
        >
          Reset
        </ResetButton>
      </Box>
    </Grid>
  );
};
