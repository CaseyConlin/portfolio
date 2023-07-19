import { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

export const UserInterfaceContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      className="input-grid"
      container
      py={1}
      justifyContent={"center"}
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: grey[200],
        boxShadow: "1px -1px 3px  #212121 ",
      }}
    >
      {children}
    </Grid>
  );
};
