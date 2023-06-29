import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { useGameContext } from "./WordGameContext";
import { SecretLetter } from "./SecretLetter";
import { lightGreen } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";

export interface Props {
  secretLetter: string;
  index: number;
}
export const SecretLetterTile = (props: Props) => {
  const [isLetterShowing, setIsLetterShowing] = useState(false);
  const [wasLetterRight, setWasLetterRight] = useState(false);
  const [wasLetterWrong, setWasLetterWrong] = useState(false);
  const [finalColor, setFinalColor] = useState("#D3D3D3");

  const { guessedLetter, guessedLetters, rightCount, errorCount, secretWord } =
    useGameContext();

  const Item = styled("div")(({ theme }) => ({}));

  useEffect(() => {
    if (guessedLetter === props.secretLetter.toUpperCase()) {
      setIsLetterShowing(true);
    }
  }, [guessedLetter, props.secretLetter]);

  useEffect(() => {
    if (rightCount === secretWord.length || errorCount === 0) {
      setIsLetterShowing(true);

      if (guessedLetters.includes(props.secretLetter.toUpperCase())) {
        setFinalColor(lightGreen[200]);
      } else {
        setFinalColor(deepOrange[200]);
      }
    }
  }, [props.secretLetter, secretWord, errorCount, rightCount, guessedLetters]);

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignContent: "center",
        p: 1,
      }}
      xs={1}
      sm={1}
    >
      <Item
        sx={{
          p: 0,
          width: { xs: "25px", md: "45px" },
          minWidth: { xs: "25px", md: "45px" },

          height: { xs: "25px", md: "45px" },
          boxShadow: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#000",
          backgroundColor: finalColor,
          textTransform: "uppercase",
          border: "1px solid",
          borderColor: "#444d58",
          borderRadius: "12px",
          textAlign: "center",
          fontWeight: 900,
        }}
        className="valera"
        key={props.secretLetter + props.index * 2}
      >
        <SecretLetter
          secretLetter={props.secretLetter}
          index={props.index}
          isLetterShowing={isLetterShowing}
        />
      </Item>
    </Grid>
  );
};
