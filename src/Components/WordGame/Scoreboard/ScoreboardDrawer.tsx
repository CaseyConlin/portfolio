import { ReactElement } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import "../../../App.css";
import { grey, lightGreen } from "@mui/material/colors";

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
          background: grey[900],
          color: lightGreen["A400"],
          fontSize: "1rem",
        },
      }}
    >
      <Typography variant="h4" align="center" py={"20px"}>
        <Box
          component="span"
          sx={{
            fontFamily: "Nasa",
            fontSize: "3.5rem",
          }}
        >
          LIFT_FF
        </Box>{" "}
        <br />
        <MilitaryTechIcon fontSize="large" sx={{ pr: "10px" }} />
        High Scores
        <MilitaryTechIcon fontSize="large" sx={{ pl: "8px" }} />
      </Typography>

      {children}
    </Drawer>
  );
};
