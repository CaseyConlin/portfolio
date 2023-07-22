// Small component to display the hidden letter in its box if the player guesses it.

import Fade from "@mui/material/Fade";

export interface Props {
  secretLetter: string;
  show: boolean;
}
export const SecretLetter = ({ secretLetter, show }: Props) => {
  return (
    <Fade in={show}>
      <span data-testid={"SecretLetter"}>{secretLetter}</span>
    </Fade>
  );
};
