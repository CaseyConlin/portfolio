import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

import { keyboardLetterHandler } from "../../features/wordGame/wordGameSlice";

import { RocketContainer } from "./RocketContainer";
import { RocketWrapper } from "./RocketWrapper";
import { WordGameCardContainer } from "./WordGameCardContainer";

import { SecretWordContainer } from "./SecretWordContainer";
import { SecretWordWrapper } from "./SecretWordWrapper";
import { Hint } from "./Hint";
import { WordGameAlert } from "./WordGameAlert";
import { SecretLetterTile } from "./SecretLetterTile";

import { UserInterfaceContainer } from "./UserInterfaceContainer";
import { KeyboardContainer } from "./KeyboardContainer";
import { KeyboardWrapper } from "./KeyboardWrapper";
import { KeyboardLetterButton } from "./KeyboardLetterButton";
import { ControlsContainer } from "./ControlsContainer";
import { ResetButton } from "./ResetButton";
import { NumberOfLettersSelector } from "./NumberOfLettersSelector";
import { ErrorCountViewer } from "./ErrorCountView";

import { DrawerButtonContainer } from "./DrawerButtonContainer";
import { WordGameCardDrawer } from "./WordGameCardDrawer";
import { WordGameCardHeader } from "./WordGameCardHeader";

import { ScoreboardDrawer } from "./Scoreboard/ScoreboardDrawer";
import { ScoreboardTable } from "./Scoreboard/ScoreboardTable";
import { NewScoreRow } from "./Scoreboard/NewScoreRow";

import { headings } from "./Scoreboard/headings";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Unstable_Grid2";
import "../../App.css";
import styles from "./WordGameContainer.module.css";
import { NewScoreForm } from "./Scoreboard/NewScoreForm";
import { useDispatch } from "react-redux";
import {
  fetchNewWordByLetterCount,
  fetchScores,
} from "../../features/wordGame/wordGameSlice";

export const WordGame = () => {
  const [isAboutDrawerOpen, setIsAboutDrawerOpen] = useState(false);
  const [isScoreDrawerOpen, setIsScoreDrawerOpen] = useState(false);

  const scores = useSelector((state: RootState) => [
    ...state.wordGame.scoreList,
  ]) as userScore[];
  // const scores = useSelector((state: RootState) => state.wordGame.scoreList);

  const secretWord = useSelector(
    (state: RootState) => state.wordGame.secretWord
  );
  const numberOfLetters = useSelector(
    (state: RootState) => state.wordGame.numberOfLetters
  );
  const rightCount = useSelector(
    (state: RootState) => state.wordGame.rightCount
  );
  const errorCount = useSelector(
    (state: RootState) => state.wordGame.errorCount
  );
  const guessedLetters = useSelector(
    (state: RootState) => state.wordGame.guessedLetters
  );
  const isGameOver = useSelector(
    (state: RootState) => state.wordGame.isGameOver
  );

  const alpha = Array.from(Array(26)).map((_, i) =>
    String.fromCharCode(i + 65)
  );

  const dispatch = useDispatch<AppDispatch>();

  // Fetch a new word when the component mounts.
  useEffect(() => {
    dispatch(fetchNewWordByLetterCount(numberOfLetters));
  }, []);

  // Handle the player's physical keyboard events.
  const onKeyDown = (event: KeyboardEvent) => {
    const newKey = event.key.toUpperCase();
    if (
      !isScoreDrawerOpen &&
      newKey.length === 1 &&
      alpha.includes(newKey) &&
      !guessedLetters.includes(newKey)
    ) {
      return dispatch(keyboardLetterHandler(newKey));
    }
  };

  // Listen for the player's physical keyboard events.
  useEffect(() => {
    if (isScoreDrawerOpen || isGameOver) {
      return;
    }
    document.addEventListener("keydown", onKeyDown);

    if (isGameOver) {
      document.removeEventListener("keydown", onKeyDown);
    }
    if (guessedLetters.length === 0) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [secretWord, errorCount, rightCount, guessedLetters, isScoreDrawerOpen]);

  //Handling the score and scoreboard.
  //
  //Call the API to fetch the high scores, and open the Score Board Drawer.
  const scoreBoardDrawerHandler = () => {
    dispatch(fetchScores());
    setIsScoreDrawerOpen(true);
  };

  //Open and close Score Board Drawer.
  const toggleScoreDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsScoreDrawerOpen(isOpen);
    };

  //Handle the about drawer
  const toggleAboutDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsAboutDrawerOpen(isOpen);
    };

  return (
    <div className={styles.starsContainer}>
      <div className={styles.rocketsBackground}></div>

      <Grid
        container
        p={{ xs: 0, lg: 3 }}
        flexDirection={{ xs: "column", sm: "row", lg: "row" }}
        justifyContent={"flex-end"}
        id="liftoff"
      >
        <RocketContainer>
          <RocketWrapper isPlayerRocket={false} />
          <RocketWrapper isPlayerRocket={true} />
        </RocketContainer>

        <WordGameCardContainer>
          <Card sx={{ m: { xs: 1, sm: 2 } }}>
            <WordGameCardHeader />

            <SecretWordContainer>
              <WordGameAlert
                scoreBoardDrawerHandler={scoreBoardDrawerHandler}
              />
              <SecretWordWrapper>
                {secretWord &&
                  secretWord.map((letter: string, index: number) => (
                    <SecretLetterTile
                      secretLetter={letter}
                      index={index}
                      key={letter + index}
                    />
                  ))}
              </SecretWordWrapper>
              <Hint />
            </SecretWordContainer>

            <UserInterfaceContainer>
              <KeyboardContainer>
                <KeyboardWrapper>
                  {alpha.map((letter) => (
                    <KeyboardLetterButton
                      key={letter}
                      keyboardLetter={letter}
                    />
                  ))}
                </KeyboardWrapper>
              </KeyboardContainer>
              <ControlsContainer>
                <ErrorCountViewer />
                <NumberOfLettersSelector />
                <ResetButton />
              </ControlsContainer>
            </UserInterfaceContainer>

            <DrawerButtonContainer>
              <CardActions onClick={scoreBoardDrawerHandler}>
                <Button sx={{ color: "#000" }}>
                  <MilitaryTechIcon
                    fontSize="large"
                    sx={{ paddingRight: "10px" }}
                  />
                  <Typography>High Scores</Typography>
                  <KeyboardArrowRightIcon />
                </Button>
              </CardActions>

              <CardActions onClick={() => setIsAboutDrawerOpen(true)}>
                <Button sx={{ color: "#000" }}>
                  <VideogameAssetIcon
                    fontSize="large"
                    sx={{ paddingRight: "10px" }}
                  />
                  <Typography>Game Info</Typography>
                  <KeyboardArrowRightIcon />
                </Button>
              </CardActions>
              <ScoreboardDrawer
                toggleDrawer={toggleScoreDrawer}
                isDrawerOpen={isScoreDrawerOpen}
              >
                <NewScoreRow>
                  <NewScoreForm />
                </NewScoreRow>
                <ScoreboardTable scores={scores} headings={headings} />
              </ScoreboardDrawer>
              <WordGameCardDrawer
                toggleDrawer={toggleAboutDrawer}
                isDrawerOpen={isAboutDrawerOpen}
              />
            </DrawerButtonContainer>
          </Card>
        </WordGameCardContainer>
      </Grid>
    </div>
  );
};
