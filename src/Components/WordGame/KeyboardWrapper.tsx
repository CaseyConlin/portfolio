import { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const KeyboardWrapper = ({ children }: PropsWithChildren) => {
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
      {children}
    </Grid>
  );
};
