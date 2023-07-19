import { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const ControlsContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      container
      flexDirection={{ xs: "row", md: "column" }}
      flexWrap={"wrap"}
      justifyContent={{ xs: "space-around", md: "flex-start" }}
      xs={12}
      md={4}
    >
      {children}
    </Grid>
  );
};
