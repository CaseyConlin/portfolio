import { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const RocketContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      container
      flexDirection={"row"}
      justifyContent={"space-around"}
      spacing={{ xs: 0, lg: 3 }}
      my={{ xs: 1, sm: 5 }}
      xs={12}
      sm={5}
      order={{ xs: 2, md: 0 }}
    >
      {children}
    </Grid>
  );
};
