import { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const KeyboardContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid justifyContent="center" xs={12} md={7}>
      {children}
    </Grid>
  );
};
