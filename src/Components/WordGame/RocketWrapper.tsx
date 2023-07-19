// Gather rocket view components and use boolean isPlayerRocket to set relevant
// styles and references to context.
import { RocketBanner } from "./RocketBanner";
import { Rocket } from "./Rocket";
import { Planet } from "./Planet";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  isPlayerRocket: boolean;
  secretWord: string[];
  rightCount: number;
  errorCount: number;
}

export const RocketWrapper = ({
  isPlayerRocket,
  secretWord,
  rightCount,
  errorCount,
}: Props) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={{ lg: "center" }}
      borderRadius={2}
      order={{
        xs: isPlayerRocket ? 0 : 1,
        md: isPlayerRocket ? 1 : 0,
      }}
      xs={5}
      md={4}
      sx={{ backgroundColor: "#ffffff30" }}
    >
      <RocketBanner isPlayerRocket={isPlayerRocket} />
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
        <Rocket
          isPlayerRocket={isPlayerRocket}
          secretWord={secretWord}
          rightCount={rightCount}
          errorCount={errorCount}
        />
        <Planet isPlayerRocket={isPlayerRocket} />
      </Grid>
    </Grid>
  );
};
