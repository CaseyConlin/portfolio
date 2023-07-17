// Receive Charcodes from Keyboard container as props. Manage state for each
// keyboard letter button using onClick and useEffect for actual user keyboard
// keydown events.
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useGameContext } from "../../WordGameContext/WordGameContext";

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

  //Mark key right or wrong on click.
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

  //Listen for user keyboard keydown.
  useEffect(() => {
    userKeyboardGuessHandler(guessedLetter);
  }, [guessedLetter]);

  //Listen for end of game.
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

  const KeyBoardButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1),
    // minWidth: "45px",
    border: "1px solid #000",
    color: "#000",
    backgroundColor: "white",
    font: "Space Grotesk",
    fontWeight: 800,
    boxShadow: "1px -1px 4px  #212121",
    transform: "translateY(-2px) ",

    "&:hover": {
      boxShadow: "1px -1px 3px  #212121 ",
      backgroundColor: "#fff",
    },

    "&:active": {
      transform: "translateY(0px) ",
      boxShadow: "1px -1px 2px  #212121",
    },

    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    fontFamily: "Space Grotesk",
  }));

  return (
    <Box
      textAlign={"center"}
      display={"flex"}
      justifyContent={"center"}
      sx={{
        borderRadius: 1,
        minWidth: { xs: "35px", sm: "45px" },
        minHeight: { xs: "35px", sm: "45px" },
        backgroundColor: "#000",
        padding: "0",
        width: { xs: "37px", sm: "47px" },
        height: { xs: "37px", sm: "47px" },
      }}
    >
      <KeyBoardButton
        value={letter}
        onClick={(e) => letterButtonGuessHandler(e)}
        disabled={isLetterClicked}
        sx={{
          minWidth: { xs: "35px", sm: "45px" },
          width: { xs: "35px", sm: "45px" },
        }}
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
      </KeyBoardButton>
    </Box>
  );
};
