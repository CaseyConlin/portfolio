import { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const SecretWordContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      container
      sx={{ justifyContent: "center" }}
      spacing={{ xs: 1, md: 1 }}
      px={1}
      m={0.1}
    >
      {children}
    </Grid>
  );
};
