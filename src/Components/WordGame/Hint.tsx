import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

export const Hint = () => {
  const hint = useSelector((state: RootState) => state.wordGame.hint);

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
        label={`Hint: ${hint}`}
        icon={<LightbulbCircleIcon fontSize="medium" />}
      />
    </Grid>
  );
};
