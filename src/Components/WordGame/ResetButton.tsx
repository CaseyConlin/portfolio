import { useGameContext } from "../../WordGameContext/WordGameContext";
import { getNewWord } from "../../Services/getNewWord";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const ResetButton = () => {
  const ResetButton = styled(Button)({
    padding: "0",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "50px",
    minHeight: "50px",
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    border: "1px solid black",
    fontSize: " .8rem",
    backgroundColor: red[600],
    color: "#fff",
    transform: "translateY(-2px) ",
    font: "LucidaGrandeBold",
    boxShadow: "1px -1px 4px  #212121",

    "&:hover": {
      boxShadow: "1px -1px 3px  #212121 ",
      backgroundColor: red[600],
    },

    "&:active": {
      transform: "translateY(0px) ",
      boxShadow: "1px -1px 2px  #212121",
      weight: "53px",
      height: "53px",
    },

    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    fontFamily: "LucidaGrandeBold",
  });

  const { setSecretWord, resetScores, numberOfLetters } = useGameContext();

  const clickHandler = () => {
    resetScores();

    getNewWord(numberOfLetters).then((response) => {
      response && setSecretWord(response.word, response.hint);
    });
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
        }}
      >
        <ResetButton onClick={clickHandler}>Reset</ResetButton>
      </Box>
    </Grid>
  );
};
