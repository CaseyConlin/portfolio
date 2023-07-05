//Layout word game components and give context providers for word game context
//and MUI theme.

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import "../../App.css";
import styles from "./WordGameContainer.module.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { RocketContainer } from "./RocketContainer";
import { WordGameProvider } from "../../WordGameContext/WordGameContext";
import { WordGameCard } from "./WordGameCard";

//There is some kind of issue with Vite and possibly MUI, and removing the line
//below causes the app to fail with a Type error.
const MUI = styled(() => {});

export const WordGame = () => {
  return (
    <div className={styles.starsContainer}>
      <div className={styles.rocketsBackground}></div>

      <ThemeProvider theme={theme}>
        <WordGameProvider>
          <Grid
            container
            p={3}
            flexDirection={"row"}
            justifyContent={"flex-end"}
          >
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"space-around"}
              spacing={3}
              my={5}
              xs={12}
              sm={5}
              lg={5}
            >
              <RocketContainer isPlayerRocket={false} />
              <RocketContainer isPlayerRocket={true} />
            </Grid>
            <Grid xs={12} sm={7} lg={6}>
              <WordGameCard />
            </Grid>
          </Grid>
        </WordGameProvider>
      </ThemeProvider>
    </div>
  );
};
