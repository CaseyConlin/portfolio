import Slider from "@mui/material/Slider";
import { useGameContext } from "./WordGameContext";

function valuetext(value: number) {
  return value;
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
    setNumberOfLetters(newValue);
  };

  return (
    <div>
      <Slider
        aria-label="Number of Letters"
        orientation="vertical"
        // getAriaValueText={valuetext}
        defaultValue={6}
        min={5}
        max={10}
        valueLabelDisplay="auto"
        marks
        // sx={{ color: "#000" }}

        onChangeCommitted={handleChangeCommited}
      />
    </div>
  );
};
