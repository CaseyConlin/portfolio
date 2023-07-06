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
      alignItems={{ lg: "center" }}
      borderRadius={2}
      order={{
        xs: props.isPlayerRocket ? 0 : 1,
        md: props.isPlayerRocket ? 1 : 0,
      }}
      xs={5}
      md={4}
      sx={{ backgroundColor: "#ffffff30" }}
    >
      <RocketBanner isPlayerRocket={props.isPlayerRocket} />
      <Grid
        container
        flexDirection={"column"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        borderRadius={2}
        wrap="nowrap"
        p={0}
        px={{ xs: 0, lg: 2 }}
        py={{ xs: 2, md: 2 }}
      >
        <Rocket isPlayerRocket={props.isPlayerRocket} />
        <Planet isPlayerRocket={props.isPlayerRocket} />
      </Grid>
    </Grid>
  );
};
