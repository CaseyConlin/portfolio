import { ScoreTextField } from "./ScoreboardTextField";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "../../../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import { blue } from "@mui/material/colors";
import { ScoreboardTable } from "./ScoreboardTable";

interface Props {
  isDrawerOpen: boolean;
  loading: boolean;
  scoreList?: userScore[] | undefined;
  toggleDrawer: (
    isOpen: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export const ScoreboardDrawer = ({
  isDrawerOpen,
  loading,
  toggleDrawer,
  scoreList,
}: Props) => {
  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: { xs: "65%", sm: "45%", lg: "40%" },
          p: { xs: 2, sm: 3 },
          pb: 4,
        },
      }}
    >
      <ul>
        {loading && <p>Loading</p>}
        {scoreList &&
          scoreList.map((score, index) => {
            return <li key={score.name + index}>{score.name}</li>;
          })}
      </ul>

      <Typography variant="h4" color="text.primary">
        <Box component="span" sx={{ fontFamily: "Nasa", fontSize: "2.5rem" }}>
          LIFT_FF
        </Box>{" "}
        High Scores
      </Typography>
      <Typography variant="h5" color="text.primary" pt={2}>
        Lameplay
      </Typography>
      <ScoreboardTable />

      <ScoreTextField />
    </Drawer>
  );
};
