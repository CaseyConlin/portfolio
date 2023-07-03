import { useEffect, useState } from "react";
import { useGameContext } from "./WordGameContext";
import { motion } from "framer-motion";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { lightGreen } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import { red } from "@mui/material/colors";

export const ErrorCountViewer = () => {
  const [errorNumber, setErrorNumber] = useState<number>();
  const { errorCount } = useGameContext();

  useEffect(() => {
    setErrorNumber(errorCount);
  }, [errorCount]);

  return (
    <Grid
      p={1}
      lineHeight={1.25}
      m={0.25}
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
      xs={12}
    >
      <Box
        mx={0.125}
        sx={{
          fontSize: "1.25rem",
          display: "block",
          padding: "10px 0px",
          margin: 0,
          textAlign: "center",
          textTransform: "uppercase",
          typography: "title",
          fontFamily: "LucidaGrandeBold",
        }}
      >
        Errors Left
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: `1px solid ${red[900]}`,
          boxShadow:
            "1px -1px 2px 1px #212121 inset, -1px 1px 2px 1px #212121 inset ",
          backgroundColor: red[600],
          zIndex: 100,
          color: "white",
          textShadow:
            // "0 0 7px #fff, 0 0 10px #fff,0 0 21px #fff,0 0 42px #f5f368,0 0 82px #f5f368,0 0 92px #f5f368,0 0 102px #f5f368,0 0 151px #f5f368",
            "0px 0px 0px  #fff ,0px 0px 7px  #ffffff8c",
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
          <span style={{ fontSize: "1.75rem" }}>{errorNumber}</span>
        </motion.div>
      </div>
    </Grid>
  );
};
