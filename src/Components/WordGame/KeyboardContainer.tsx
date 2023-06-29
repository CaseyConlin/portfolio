import Grid from "@mui/material/Unstable_Grid2";
import { KeyboardLetterButton } from "./KeyboardLetterButton";

export const KeyboardContainer = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);

  return (
    <Grid
      container
      sx={{ justifyContent: "center" }}
      spacing={{ xs: 1, md: 1 }}
      columns={{ xs: 3, sm: 7, md: 8, lg: 10 }}
    >
      {alpha.map((letterCode) => (
        <KeyboardLetterButton letterCharCode={letterCode} key={letterCode} />
      ))}
    </Grid>
  );
};
