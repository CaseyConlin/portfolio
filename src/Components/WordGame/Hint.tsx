import { useGameContext } from "./WordGameContext";
import Grid from "@mui/material/Unstable_Grid2";

import Chip from "@mui/material/Chip";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
export const Hint = () => {
  const { hint } = useGameContext();
  return (
    <Grid p={2} container justifyContent={"center"}>
      <Chip
        sx={{
          textTransform: "capitalize",
          fontSize: "1.125rem",
          fontWeight: 600,
          //   fontWeight: 600,
          //   color: "#fff",
          //   backgroundColor: red[600],
        }}
        color="info"
        size="medium"
        label={`Hint: ${hint && hint}`}
        icon={
          <LightbulbCircleIcon
            fontSize="medium"
            // style={{ color: "#fff" }}
          />
        }
      />
    </Grid>
  );
};
