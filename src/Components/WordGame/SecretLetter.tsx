// Small component to display the hidden letter in its box if the player guesses
// it. Props come from the parent Secret Letter Tile component.

import { motion } from "framer-motion";
import Fade from "@mui/material/Fade";

export interface Props {
  secretLetter: string;
  isLetterShowing: boolean;
}
export const SecretLetter = (props: Props) => {
  return (
    <>
      <span>{props.isLetterShowing && props.secretLetter}</span>

      {/*
      <motion.span animate={{ y: [10, 0] }}>
        {props.isLetterShowing && props.secretLetter}
      </motion.span> 
      */}

      {/* 
      <Fade in={props.isLetterShowing}>
        <span>{props.secretLetter}</span>
      </Fade> 
      */}
    </>
  );
};
