import { useState, useMemo, useEffect } from "react";
import { useGameContext } from "./WordGameContext";
import { SecretLetterTile } from "./SecretLetterTile";
import { getNewWord } from "../../Services/getNewWord";
import Grid from "@mui/material/Unstable_Grid2";

export const SecretWordContainer = () => {
  const [newSecretWord, setNewSecretWord] = useState<string[]>([]);

  const { secretWord, setSecretWord } = useGameContext();

  useEffect(() => {
    console.log("Hey");
    getNewWord().then((response) => {
      console.log(response);
      response && setSecretWord(response.word, response.hint);
    });
  }, []);

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
