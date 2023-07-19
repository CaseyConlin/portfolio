// Receive props from Secret Word Container to set letter. Listen with useEffect
// for changes to context, and update state based on guessed letter matches, and
// counts of errors and correct guesses.
// import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
// import { useGameContext } from "../../WordGameContext/WordGameContext";
import { SecretLetter } from "./SecretLetter";
import { lightGreen } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";

export interface Props {
  secretLetter: string;
  index: number;
  show: boolean;
  right?: boolean;
  wrong?: boolean;
}
export const SecretLetterTile = ({
  secretLetter,
  index,
  show,
  right,
  wrong,
}: Props) => {
  // const [isLetterShowing, setIsLetterShowing] = useState(false);
  // const [tileColor, setTileColor] = useState("#D3D3D3");

  // const { guessedLetter, guessedLetters, rightCount, errorCount, secretWord } =
  //   useGameContext();

  // useEffect(() => {
  //   if (guessedLetter === props.secretLetter.toUpperCase()) {
  //     setIsLetterShowing(true);
  //   }
  // }, [guessedLetter, props.secretLetter]);

  // useEffect(() => {
  //   if (secretWord && (rightCount === secretWord.length || errorCount === 0)) {
  //     setIsLetterShowing(true);

  //     if (guessedLetters.includes(props.secretLetter.toUpperCase())) {
  //       setTileColor(lightGreen[200]);
  //     } else {
  //       setTileColor(deepOrange[200]);
  //     }
  //   }
  //   if (guessedLetters.length === 0) {
  //     setTileColor("#D3D3D3");
  //     setIsLetterShowing(false);
  //   }
  // }, [props.secretLetter, secretWord, errorCount, rightCount, guessedLetters]);

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignContent: "center",

        aspectRatio: 1 / 1,
      }}
      xs={1}
      px={{ xs: 2.5, md: 3.5 }}
      py={{ xs: 0.25, md: 1 }}
    >
      <Box
        sx={{
          backgroundColor: "#D3D3D3",
          ...(right && {
            backgroundColor: lightGreen[200],
          }),
          ...(wrong && {
            backgroundColor: deepOrange[200],
          }),
          width: { xs: "32px", md: "45px" },
          height: { xs: "32px", md: "45px" },
          minWidth: { xs: "32px", md: "45px" },
          minHeight: { xs: "32px", md: "45px" },
          boxShadow: "1px -1px 4px  #212121 inset ",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#000",
          textTransform: "uppercase",
          border: "1px solid",
          borderColor: "#444d58",
          borderRadius: 2,
          textAlign: "center",
          fontWeight: 900,
          fontFamily: "Space Grotesk",
          fontSize: "1.4rem",
        }}
        key={secretLetter + index * 2}
      >
        <SecretLetter secretLetter={secretLetter} show={show} />
      </Box>
    </Grid>
  );
};
