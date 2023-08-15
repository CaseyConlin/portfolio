import { ReactElement } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
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
  toggleDrawer,
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
      <Typography variant="h4" color="text.primary">
        <Box component="span" sx={{ fontFamily: "Nasa", fontSize: "2.5rem" }}>
          LIFT_FF
        </Box>{" "}
        High Scores
        <MilitaryTechIcon fontSize="large" sx={{ paddingRight: "10px" }} />
      </Typography>

      {children}
    </Drawer>
  );
};
