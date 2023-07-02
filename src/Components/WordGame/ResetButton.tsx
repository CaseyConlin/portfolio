import { useState } from "react";
import { useGameContext } from "./WordGameContext";
import { getNewWord } from "../../Services/getNewWord";
import Button from "@mui/material/Button";

export const ResetButton = () => {
  const [isClicked, setIsClicked] = useState(false);

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
    <Button
      variant="contained"
      size="large"
      color="error"
      sx={{
        minWidth: "50px",
        background: "hsl(340deg 100% 32%)",
        border: "none",
        borderRadius: "50px",
        padding: "0",
        width: "50px",
        height: "50px",
        fontWeight: 600,
      }}
    >
      <span
        onClick={clickHandler}
        style={{
          padding: "0",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          width: "47px",
          height: "47px",
          borderRadius: "47px",
          fontSize: " .75rem",
          background: " hsl(345deg 100% 47%)",
          color: "#fff",
          transform: isClicked ? "translateY(0px)" : "translateY(-2px)",
        }}
      >
        Reset
      </span>
    </Button>
  );
};
