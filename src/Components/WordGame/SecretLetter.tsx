// Small component to display the hidden letter in its box if the player guesses
// it. Props come from the parent Secret Letter Tile component.

import Fade from "@mui/material/Fade";

export interface Props {
  secretLetter: string;
  show: boolean;
  // isLetterShowing: boolean;
}
export const SecretLetter = ({ secretLetter, show }: Props) => {
  return (
    <Fade in={show}>
      <span>{secretLetter}</span>
    </Fade>
  );
};
