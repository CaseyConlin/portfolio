// Small component to display the hidden letter in its box if the player guesses
// it. Props come from the parent Secret Letter Tile component.

import Fade from "@mui/material/Fade";

export interface Props {
  secretLetter: string;
  isLetterShowing: boolean;
}
export const SecretLetter = (props: Props) => {
  return (
    <Fade in={props.isLetterShowing}>
      <span>{props.secretLetter}</span>
    </Fade>
  );
};
