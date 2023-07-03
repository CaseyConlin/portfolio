import Grid from "@mui/material/Unstable_Grid2";
import { KeyboardLetterButton } from "./KeyboardLetterButton";

export const KeyboardContainer = () => {
  const alpha = Array.from(Array(26)).map((_, i) => i + 65);

  return (
    <Grid
      key={"secret"}
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{}}
      p={1}
      spacing={{ xs: 1 }}
      xs={12}
      className={"keyboard-container"}
    >
      {alpha.map((letterCode) => (
        <Grid
          key={letterCode}
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={0}
          xs={2}
        >
          <KeyboardLetterButton letterCharCode={letterCode} />
        </Grid>
      ))}
    </Grid>
  );
};
