// Gather rocket view components and use boolean isPlayerRocket to set relevant
// styles and references to context.
import { RocketBanner } from "./RocketBanner";
import { Rocket } from "./Rocket";
import { Planet } from "./Planet";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  isPlayerRocket: boolean;
}

export const RocketContainer = (props: Props) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={2}
      xs={5}
      sm={4}
      sx={{ backgroundColor: "#ffffff30" }}
    >
      <RocketBanner isPlayerRocket={props.isPlayerRocket} />
      <Grid
        container
        flexDirection={"column"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        borderRadius={2}
        px={{ xs: 0, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
      >
        <Rocket isPlayerRocket={props.isPlayerRocket} />
        <Planet isPlayerRocket={props.isPlayerRocket} />
      </Grid>
    </Grid>
  );
};
