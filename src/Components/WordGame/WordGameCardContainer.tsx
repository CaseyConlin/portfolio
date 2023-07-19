import { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const WordGameCardContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid xs={12} sm={7} lg={6}>
      {children}
    </Grid>
  );
};
