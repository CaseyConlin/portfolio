// Input component to set number of letters for secret word. Number of letters
// for secret word is set in context using the component's onChangeCommitted
// callback function. Updating the word is triggered by the Reset button, not
// the slider changing.
import Slider from "@mui/material/Slider";
import { useGameContext } from "../../WordGameContext/WordGameContext";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

function valuetext(value: number) {
  return `${value}`;
}

const marks = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
];

export const NumberOfLettersSelector = () => {
  const { numberOfLetters, setNumberOfLetters } = useGameContext();

  const handleChangeCommited = (
    event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    event && setNumberOfLetters(newValue);
  };

  const NumberOfLettersSlider = styled(Slider)(() => ({
    color: blue[600],

    "& .MuiSlider-thumb": {
      color: blue[800],
      borderRadius: 0,
      height: "20px",
      width: "10px",
    },

    "& .MuiSlider-markLabel": {
      fontFamily: "LucidaGrandeBold",
    },
  }));

  return (
    <Grid
      px={2}
      py={1}
      lineHeight={1.25}
      m={1}
      bgcolor="white"
      sx={{
        border: "1px solid black",
        boxShadow: "1px -1px 4px  #212121 ",
      }}
      borderRadius={1}
      container
      flexDirection={"column"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      xs={12}
    >
      <Box
        mx={0.125}
        sx={{
          fontSize: "1.25rem",
          display: "block",
          padding: "2px 0px",
          margin: 0,
          textAlign: "center",
          textTransform: "uppercase",
          typography: "subtitle1",
          fontFamily: "LucidaGrandeBold",
        }}
      >
        Letters
      </Box>
      <NumberOfLettersSlider
        aria-label="Number of Letters"
        getAriaValueText={valuetext}
        defaultValue={numberOfLetters}
        min={5}
        max={10}
        valueLabelDisplay="auto"
        marks={marks}
        onChangeCommitted={handleChangeCommited}
      />
    </Grid>
  );
};
