// Small component to display the hidden letter in its box if the player guesses it.
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import Fade from "@mui/material/Fade";

export interface Props {
  secretLetter: string;
}
export const SecretLetter = ({ secretLetter }: Props) => {
  const guessedLetters = useSelector(
    (state: RootState) => state.wordGame.guessedLetters
  );
  const isGameOver = useSelector(
    (state: RootState) => state.wordGame.isGameOver
  );

  return (
    <Fade in={guessedLetters.includes(secretLetter) || isGameOver}>
      <span>{secretLetter}</span>
    </Fade>
  );
};
