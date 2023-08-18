import { motion } from "framer-motion";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Slide from "@mui/material/Slide";

// import Button from "@mui/material/Button";

const alertAnimationVariant = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      mass: 1,
      stiffness: 45,
    },
  },
  exit: {
    y: 50,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 45,
    },
  },
};

export interface Props {
  alertMessage: { message: string; severity: "success" | "error" };
  scoreRegisterHandler: () => void;
}
export const WordGameAlert = ({
  alertMessage,
  scoreRegisterHandler,
}: Props) => {
  const AlertMotion = motion(Alert);

  return (
    <Box
      sx={{
        overflow: "hidden",
        visibility: alertMessage.message !== "Alert" ? "visible" : "hidden",
      }}
    >
      <AlertMotion
        sx={{
          justifyContent: "center",
          fontSize: "1rem",
          display: "flex",

          alignItems: "center",
        }}
        severity={alertMessage.severity}
        variants={alertAnimationVariant}
        animate="animate"
        exit="exit"
      >
        {alertMessage.message}{" "}
        <Slide
          direction="up"
          in={alertMessage.severity === "success"}
          style={{
            transitionDuration: "1000ms",
            transitionDelay:
              alertMessage.severity === "success" ? "500ms" : "0ms",
          }}
        >
          <Fab
            variant="extended"
            color="info"
            size="small"
            onClick={scoreRegisterHandler}
            sx={{ ml: 1, fontWeight: 600 }}
          >
            High Score!
          </Fab>
        </Slide>
      </AlertMotion>
    </Box>
  );
};
