import { motion } from "framer-motion";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

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
}
export const WordGameAlert = ({ alertMessage }: Props) => {
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
        }}
        severity={alertMessage.severity}
        variants={alertAnimationVariant}
        animate="animate"
        exit="exit"
      >
        {alertMessage.message}
      </AlertMotion>
    </Box>
  );
};
