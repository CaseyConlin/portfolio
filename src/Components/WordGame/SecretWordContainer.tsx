import { useState, useMemo } from "react";

import { useGameContext } from "./WordGameContext";
import { SecretLetterTile } from "./SecretLetterTile";
import Grid from "@mui/material/Unstable_Grid2";

export const SecretWordContainer = () => {
  const [newSecretWord, setNewSecretWord] = useState<string[]>([]);

  const { secretWord } = useGameContext();

  useMemo(() => {
    const secretWordArray = Array.from(secretWord);
    setNewSecretWord(secretWordArray);
  }, [secretWord]);

  return (
    <Grid
      container
      sx={{ justifyContent: "center" }}
      spacing={{ xs: 1, md: 1 }}
    >
      {newSecretWord.map((letter, index) => (
        <SecretLetterTile
          secretLetter={letter}
          index={index}
          key={letter + index}
        />
      ))}
    </Grid>
  );
};
