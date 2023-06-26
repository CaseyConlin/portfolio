import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export interface Props {
  letterCharCode: number;
  word: string;
}

export const KeyboardLetterButton = (props: Props) => {
  const [isLetterClicked, setIsLetterClicked] = useState(false);
  const [isLetterWrong, setIsLetterWrong] = useState(false);
  const [isLetterRight, setIsLetterRight] = useState(false);

  const letter = String.fromCharCode(props.letterCharCode);

  const letterGuessHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLetterClicked(true);
    const target = event.target as HTMLButtonElement;
    console.log(target.value.toLowerCase());
    if (props.word.includes(letter.toLocaleLowerCase())) {
      setIsLetterRight(true);
    } else {
      setIsLetterWrong(true);
    }
  };
  return (
    <Grid
      container
      sx={{ justifyContent: "center", p: 1 }}
      xs={1}
      sm={1}
      key={letter}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="800"
        height="800"
        id="svg2"
      >
        <defs id="defs4" />
        <g id="layer1">
          <rect
            width="45px"
            height="45px"
            ry="40"
            x="10.970459"
            y="10.970459"
            style={{
              opacity: 1,
              fill: "red",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "red",
              strokeWidth: 1.94092906,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeDashoffset: 0,
              strokeOpacity: 1,
            }}
            id="rect22526"
          />
          <rect
            width="717.79266"
            height="717.79272"
            ry="40"
            x="41.103668"
            y="41.103638"
            id="rect23413"
          />
          <rect
            width="837.96942"
            height="75.606262"
            ry="37.80299"
            x="-418.9848"
            y="527.88239"
            transform="matrix(-0.707107,0.707107,0.707107,0.707107,0,0)"
            id="rect23421"
          />
          <rect
            width="837.97064"
            height="75.606377"
            rx="37.803047"
            ry="37.803047"
            x="146.70018"
            y="-37.80328"
            transform="matrix(0.707107,0.707107,-0.707107,0.707107,0,0)"
            id="rect23425"
          />
        </g>
      </svg> */}
      <Button
        sx={{
          p: 1,
          minWidth: "45px",
          boxShadow: 3,
          borderColor: "black",
          color: "#000",
          backgroundColor: "#D3D3D3",
          fontWeight: 800,
        }}
        className="valera"
        variant="outlined"
        value={letter}
        onClick={(e) => letterGuessHandler(e)}
        disabled={isLetterClicked}
      >
        {isLetterRight && (
          <CheckCircleIcon
            fontSize="small"
            sx={{
              color: "green",
              position: "absolute",
              p: 0,
              m: 0,
              fontWeight: 800,
              left: 0,
              top: 0,
            }}
          />
        )}
        {isLetterWrong && (
          <CancelIcon
            fontSize="small"
            sx={{
              color: "red",
              position: "absolute",
              p: 0,
              m: 0,
              fontWeight: 800,
              left: 0,
              top: 0,
            }}
          />
        )}
        {letter}
      </Button>
    </Grid>
  );
};
