import { motion } from "framer-motion";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export interface Props {
  isResetNeeded: boolean;
  resetGame: React.MouseEventHandler<HTMLButtonElement>;
}

export const ResetButton = ({ resetGame, isResetNeeded }: Props) => {
  const ResetButton = styled(Button)({
    padding: "0",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "54px",
    minHeight: "54px",
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    border: "1px solid black",
    fontSize: " .8rem",
    backgroundColor: red[600],
    color: "#fff",
    transform: "translateY(-2px) ",
    font: "Space Grotesk",
    fontWeight: 800,
    boxShadow: "1px -1px 4px  #212121",

    "&:hover": {
      boxShadow: "1px -1px 2px  #212121 ",
      backgroundColor: red[600],
    },

    "&:active": {
      transform: "translateY(0px) ",
      boxShadow: "1px -1px 2px  #212121",
      weight: "53px",
      height: "53px",
    },

    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    fontFamily: "Space Grotesk",
  });

  const MotionResetButton = motion(ResetButton);
  return (
    <Grid
      px={{ xs: 1, md: 2 }}
      py={1}
      lineHeight={1.25}
      m={0}
      bgcolor="white"
      sx={{
        border: "1px solid black",
        boxShadow: "1px -1px 4px  #212121 ",
        fontFamily: "Space Grotesk",
        fontWeight: 800,
      }}
      borderRadius={1}
      container
      flexDirection={"row"}
      justifyContent={{ xs: "center", md: "flex-start" }}
      alignItems={"center"}
      alignSelf={{ xs: "stretch", md: "center" }}
      xs={2}
      md={12}
    >
      <Box
        sx={{
          marginRight: "10px",
          fontSize: "1.25rem",
          padding: "2px 0px",
          textAlign: "center",
          textTransform: "uppercase",
          typography: "subtitle1",
          fontFamily: "Space Grotesk",
          fontWeight: 800,
          display: { xs: "none", md: "block" },
        }}
      >
        New Word
      </Box>
      <Box
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        sx={{
          minWidth: "55px",
          minHeight: "55px",
          backgroundColor: red[900],
          border: "1px solid black ",
          borderRadius: "50%",
          padding: "0",
          width: "55px",
          height: "55px",
        }}
      >
        <MotionResetButton
          animate={
            isResetNeeded && {
              boxShadow: ["0px 0px 1px red", "0px 0px 20px red"],
              backgroundColor: ["#b71c1c", "#ff5252"],
            }
          }
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          onClick={resetGame}
        >
          Reset
        </MotionResetButton>
      </Box>
    </Grid>
  );
};
