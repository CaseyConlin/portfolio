// Run getNewWord API call to get a secret word once at page load. Listen to
// context for changes to secret word, and update the secret word and necessary
// letters. Map secretword letters to secret letter tiles.
import { useState, useEffect } from "react";
import { useGameContext } from "../../WordGameContext/WordGameContext";
import { SecretLetterTile } from "./SecretLetterTile";
import { getNewWord } from "../../Services/getNewWord";
import Grid from "@mui/material/Unstable_Grid2";

export const SecretWordContainer = () => {
  const [newSecretWord, setNewSecretWord] = useState([
    "L",
    "I",
    "F",
    "T",
    "O",
    "F",
  ]);

  const { secretWord, setSecretWord, numberOfLetters } = useGameContext();

  useEffect(() => {
    getNewWord(numberOfLetters).then((response) => {
      response && setSecretWord(response.word, response.hint);
    });
  }, []);

  useEffect(() => {
    const secretWordArray = secretWord && Array.from(secretWord);
    secretWordArray && setNewSecretWord(secretWordArray);
  }, [secretWord]);

  return (
    <Grid
      container
      sx={{ justifyContent: "center" }}
      spacing={{ xs: 1, md: 1 }}
    >
      {newSecretWord &&
        newSecretWord.map((letter, index) => (
          <SecretLetterTile
            secretLetter={letter}
            index={index}
            key={letter + index}
          />
        ))}
    </Grid>
  );
};
