import { ReactElement } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../../App.css";

interface Props {
  isDrawerOpen: boolean;
  loading: boolean;
  scoreList?: userScore[] | undefined;
  toggleDrawer: (
    isOpen: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  children: ReactElement | ReactElement[];
}
export const ScoreboardDrawer = ({
  isDrawerOpen,
  loading,
  toggleDrawer,
  scoreList,
  children,
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

      {children}
    </Drawer>
  );
};
