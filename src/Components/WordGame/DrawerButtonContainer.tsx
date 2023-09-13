import { ReactElement } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export interface Props {
  children: ReactElement | ReactElement[];
}

export const DrawerButtonContainer = ({ children }: Props) => {
  return (
    <Grid
      className="input-grid"
      container
      py={1}
      justifyContent={"center"}
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Grid>
  );
};
