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

  const letterGuessHandler = (
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
        boxShadow: 3,
        borderColor: "black",
        color: "#000",
        backgroundColor: "white",
        fontWeight: "bold",
        fontFamily: "LucidaGrandeBold",
      }}
      className="valera"
      variant="outlined"
      value={letter}
      onClick={(e) => letterGuessHandler(e)}
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
