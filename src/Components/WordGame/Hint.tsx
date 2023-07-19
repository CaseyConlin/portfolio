// Chip component to display hint from API based on context.
import { useGameContext } from "../../WordGameContext/WordGameContext";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

export interface Props {
  hint: string;
}
export const Hint = ({ hint }: Props) => {
  // const { hint } = useGameContext();

  return (
    <Grid p={2} container justifyContent={"center"}>
      <Chip
        sx={{
          visibility: hint ? "visible" : "hidden",
          textTransform: "capitalize",
          fontSize: "1.125rem",
          fontWeight: 600,
        }}
        color="info"
        size="medium"
        label={`Hint: ${hint && hint}`}
        icon={<LightbulbCircleIcon fontSize="medium" />}
      />
    </Grid>
  );
};
