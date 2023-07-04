import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useGameContext } from "./WordGameContext";

export interface Props {
  letterCharCode: number;
}

export const KeyboardLetterButton = (props: Props) => {
  const {
    guessedLetter,
    addGuessedLetter,
    secretWord,
    rightCount,
    errorCount,
    guessedLetters,
  } = useGameContext();
  const [isLetterClicked, setIsLetterClicked] = useState(false);
  const [isLetterWrong, setIsLetterWrong] = useState(false);
  const [isLetterRight, setIsLetterRight] = useState(false);

  const letter = String.fromCharCode(props.letterCharCode);

  const letterButtonGuessHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLetterClicked(true);
    const target = event.target as HTMLButtonElement;
    addGuessedLetter(target.value);

    if (secretWord.toLowerCase().includes(letter.toLowerCase())) {
      setIsLetterRight(true);
    } else {
      setIsLetterWrong(true);
    }
  };

  const userKeyboardGuessHandler = (userKeyboardLetter: string) => {
    if (letter.toLocaleLowerCase() === userKeyboardLetter.toLocaleLowerCase()) {
      if (secretWord.toLowerCase().includes(letter.toLowerCase())) {
        setIsLetterRight(true);
        setIsLetterClicked(true);
      } else {
        setIsLetterWrong(true);
        setIsLetterClicked(true);
      }
    }
  };

  useEffect(() => {
    userKeyboardGuessHandler(guessedLetter);
  }, [guessedLetter]);

  useEffect(() => {
    if (secretWord && (rightCount === secretWord.length || errorCount === 0)) {
      setIsLetterClicked(true);
    }
    if (guessedLetters.length === 0) {
      setIsLetterRight(false);
      setIsLetterWrong(false);
      setIsLetterClicked(false);
    }
  }, [rightCount, errorCount, secretWord, guessedLetters]);

  return (
    <Button
      sx={{
        p: 1,
        minWidth: "45px",

        borderColor: "black",
        color: "#000",
        backgroundColor: "white",
        fontWeight: "bold",
        fontFamily: "LucidaGrandeBold",
        boxShadow: "1px -1px 4px  #212121",
      }}
      className="valera"
      variant="outlined"
      value={letter}
      onClick={(e) => letterButtonGuessHandler(e)}
      disabled={isLetterClicked}
    >
      {isLetterRight && (
        <CheckCircleIcon
          fontSize="small"
          sx={{
            color: "green",
            position: "absolute",
            p: 0,
            m: 0,
            fontWeight: 800,
            left: 0,
            top: 0,
          }}
        />
      )}
      {isLetterWrong && (
        <CancelIcon
          fontSize="small"
          sx={{
            color: "red",
            position: "absolute",
            p: 0,
            m: 0,
            fontWeight: 800,
            left: 0,
            top: 0,
          }}
        />
      )}
      {letter}
    </Button>
  );
};
