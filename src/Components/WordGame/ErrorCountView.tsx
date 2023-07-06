// Component for small field to provide a count of remaining errors before the
// opposing team's rocket blasts off. State is updated based on context.

import { useEffect, useState } from "react";
import { useGameContext } from "../../WordGameContext/WordGameContext";
import { motion } from "framer-motion";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import { Typography } from "@mui/material";

export const ErrorCountViewer = () => {
  const [errorNumber, setErrorNumber] = useState<number>();
  const { errorCount } = useGameContext();

  useEffect(() => {
    setErrorNumber(errorCount);
  }, [errorCount]);

  return (
    <Grid
      p={{ xs: 0, sm: 1 }}
      lineHeight={1.25}
      m={{ xs: 0, sm: 0.25 }}
      bgcolor="white"
      boxShadow={1}
      sx={{
        border: "1px solid black",
        fontFamily: "LucidaGrandeBold",
        boxShadow: "1px -1px 4px  #212121",
      }}
      borderRadius={1}
      container
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      alignSelf={{ xs: "stretch", md: "center" }}
      xs={4}
      md={12}
    >
      <Box
        mx={0.125}
        sx={{
          fontSize: { xs: "1rem", sm: "1.25rem" },
          display: "block",
          padding: { xs: "2px 0px", sm: "10px 0px" },
          margin: 0,
          textAlign: "center",
          textTransform: "uppercase",
          typography: "title",
          fontFamily: "LucidaGrandeBold",
        }}
      >
        Errors Left
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "35px", sm: "60px" },
          height: { xs: "35px", sm: "60px" },
          borderRadius: "50%",
          border: `1px solid ${red[900]}`,
          boxShadow:
            "1px -1px 2px 1px #212121 inset, -1px 1px 2px 1px #212121 inset ",
          backgroundColor: red[600],
          zIndex: 100,
          color: "white",
          textShadow: "0px 0px 0px  #fff ,0px 0px 7px  #ffffff8c",
        }}
      >
        <motion.div
          key={errorNumber}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 1,
            stiffness: 700 - errorCount * 100,
          }}
        >
          <Typography sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }}>
            {errorNumber}
          </Typography>
        </motion.div>
      </Box>
    </Grid>
  );
};
