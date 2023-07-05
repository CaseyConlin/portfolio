// Container for Keyboard Buttons. Map through an array of charcodes to get A-Z
// for keyboard. UseEffect hook listens for actual keyboard keydown events and
// updates context for use in updating Keyboard Button Component.
import { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { KeyboardLetterButton } from "./KeyboardLetterButton";
import { useGameContext } from "../../WordGameContext/WordGameContext";

export const KeyboardContainer = () => {
  const alpha = Array.from(Array(26)).map((_, i) => i + 65);

  const {
    secretWord,
    addGuessedLetter,
    guessedLetters,
    rightCount,
    errorCount,
  } = useGameContext();

  const onKeyDown = (event: KeyboardEvent) => {
    const newKey = event.key.toUpperCase();
    if (
      newKey.length === 1 &&
      alpha.includes(newKey.charCodeAt(0)) &&
      !guessedLetters.includes(newKey)
    ) {
      addGuessedLetter(newKey);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    if (secretWord && (rightCount === secretWord.length || errorCount === 0)) {
      document.removeEventListener("keydown", onKeyDown);
    }
    if (guessedLetters.length === 0) {
      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [addGuessedLetter, errorCount, rightCount, secretWord]);

  return (
    <Grid
      key={"secret"}
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{}}
      p={1}
      spacing={{ xs: 1 }}
      xs={12}
      className={"keyboard-container"}
    >
      {alpha.map((letterCode) => (
        <Grid
          key={letterCode}
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={0}
          sx={{
            aspectRatio: 1 / 1,
          }}
          xs={2}
        >
          <KeyboardLetterButton letterCharCode={letterCode} />
        </Grid>
      ))}
    </Grid>
  );
};
