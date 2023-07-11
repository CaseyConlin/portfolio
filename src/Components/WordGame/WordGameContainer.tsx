//Layout word game components and give context provider for word game context.

import Grid from "@mui/material/Unstable_Grid2";
import "../../App.css";
import styles from "./WordGameContainer.module.css";
import { RocketContainer } from "./RocketContainer";
import { WordGameProvider } from "../../WordGameContext/WordGameContext";
import { WordGameCard } from "./WordGameCard";

export const WordGame = () => {
  return (
    <div className={styles.starsContainer}>
      <div className={styles.rocketsBackground}></div>

      <WordGameProvider>
        <Grid
          container
          p={{ xs: 0, lg: 3 }}
          flexDirection={{ xs: "column", sm: "row", lg: "row" }}
          justifyContent={"flex-end"}
          id="liftoff"
        >
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"space-around"}
            spacing={{ xs: 0, lg: 3 }}
            my={{ xs: 1, sm: 5 }}
            xs={12}
            sm={5}
            order={{ xs: 2, md: 0 }}
          >
            <RocketContainer isPlayerRocket={false} />
            <RocketContainer isPlayerRocket={true} />
          </Grid>
          <Grid xs={12} sm={7} lg={6}>
            <WordGameCard />
          </Grid>
        </Grid>
      </WordGameProvider>
    </div>
  );
};
