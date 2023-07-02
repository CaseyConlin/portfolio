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

        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          event.target &&
            event.target.value &&
            setNumberOfLetters(Number(event.target.value));
        }}
      />
    </div>
  );
};
