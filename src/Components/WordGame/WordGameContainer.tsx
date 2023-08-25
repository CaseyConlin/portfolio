import { useState, useEffect } from "react";

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
// import { ScoreTextField } from "./Scoreboard/ScoreboardTextField";

import { getNewWord } from "../../Services/getNewWord";
import {
  getScores,
  registerNewScore,
  getNewRank,
} from "../../Services/scoreboard";

import {
  winMessages,
  loseMessages,
  setAlert,
  scoreCalculator,
} from "./utils/wordGameUtils";
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

export const WordGame = () => {
  const [isAboutDrawerOpen, setIsAboutDrawerOpen] = useState(false);
  const [isScoreDrawerOpen, setIsScoreDrawerOpen] = useState(false);
  const [numberOfLetters, setNumberOfLetters] = useState<number | number[]>(7);
  const [errorCount, setErrorCount] = useState(5);
  const [hint, setHint] = useState("");
  const [frequency, setFrequency] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([""]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [newScore, setNewScore] = useState<userScore | undefined>();
  const [newScoreRegisterMessage, setNewScoreRegisterMessage] =
    useState<string>();
  const [alertMessage, setAlertMessage] = useState<{
    message: string;
    severity: "success" | "error";
  }>({
    message: "Alert",
    severity: "success",
  });

  const [secretWord, setSecretWord] = useState([
    "L",
    "I",
    "F",
    "T",
    "O",
    "F",
    "F",
  ]);
  const [scoreList, setScoreList] = useState<userScore[]>();
  const [isScoresLoading, setIsScoresLoading] = useState(true);

  //Grab a word and relevant word info from the API once on page load. The API
  //can be a little inconsistent, but the getNewWord fetch function should catch
  //errors and re-run the API call before returning data here.
  useEffect(() => {
    getNewWord(numberOfLetters).then((response) => {
      if (response && response.word && response.hint && response.frequency) {
        setAlertMessage({ message: "Alert", severity: "success" });
        setSecretWord(Array.from(response.word));
        setHint(response.hint);
        setFrequency(response.frequency);
      }
      if (response && response.apiError) {
        setAlertMessage({ message: response.apiError, severity: "error" });
      }
    });
  }, []);

  //Reset the game to initial state.
  const resetGameHandler = () => {
    setErrorCount(5);
    setRightCount(0);
    setGuessedLetters([]);
    setIsGameOver(false);
    setNewScore(undefined);
    setNewScoreRegisterMessage(undefined);
    setAlertMessage({ message: "Alert", severity: "success" });
    getNewWord(numberOfLetters).then((response) => {
      if (response && response.word && response.hint && response.frequency) {
        setSecretWord(Array.from(response.word));
        setHint(response.hint);
        setFrequency(response.frequency);
      }
      if (response && response.apiError)
        setAlertMessage({ message: response.apiError, severity: "error" });
    });
  };

  //Listen for state changes that mean the player has won or lost & set messages
  //accordingly.
  useEffect(() => {
    if (errorCount === 0 || rightCount === secretWord.length) {
      setIsGameOver(true);
    }
    if (rightCount === secretWord.length) {
      setAlert(winMessages, "success", setAlertMessage);
    }
    if (errorCount === 0) {
      setAlert(loseMessages, "error", setAlertMessage);
    }
  }, [errorCount, rightCount]);

  const alpha = Array.from(Array(26)).map((_, i) =>
    String.fromCharCode(i + 65)
  );
  //
  //
  //Reveal the letters in the secret word on game's end, and style them based on
  //whether they were guessed correctly or not guessed during the game.
  const secretLetterStatusHandler = (letter: string) => {
    let status = "default";
    if (isGameOver) {
      status = guessedLetters.includes(letter) ? "right" : "wrong";
      return status;
    }
    return status;
  };
  //
  //
  //On-screen and physical keyboard event handling.
  //
  // Handle on-screen keyboard events for each keyboard letter. This is also
  //used to help with physical keyboard letter handling.
  const keyboardLetterHandler = (letter: string) => {
    setGuessedLetters([...guessedLetters, letter]);
    if (secretWord.includes(letter)) {
      const letterScore = (secretWord.filter((val) => val === letter) || [])
        .length;
      setRightCount(letterScore + rightCount);
    } else {
      setErrorCount(errorCount - 1);
    }
  };

  //Update the onscreen keyboard buttons to provide feedback to the user.
  //Letters have been guessed (clicked / keyed) are disabled, and show
  //checkmarks or x's based on whether they're in the word or not.
  const keyboardLetterStatusHandler = (letter: string) => {
    let status = "default";
    if (guessedLetters.includes(letter)) {
      status = secretWord.includes(letter) ? "right" : "wrong";
      return status;
    }
    return status;
  };

  // Handle the player's physical keyboard events.
  const onKeyDown = (event: KeyboardEvent) => {
    const newKey = event.key.toUpperCase();
    if (
      !isScoreDrawerOpen &&
      newKey.length === 1 &&
      alpha.includes(newKey) &&
      !guessedLetters.includes(newKey)
    ) {
      return keyboardLetterHandler(newKey);
    }
  };

  // Listen for the player's physical keyboard events.
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    if (secretWord && (rightCount === secretWord.length || errorCount === 0)) {
      document.removeEventListener("keydown", onKeyDown);
    }
    if (guessedLetters.length === 0) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [secretWord, errorCount, rightCount, guessedLetters]);
  //
  //
  //

  //Handling the score and scoreboard.
  //
  //Call the API to fetch and set the high scores, and open the Score Board
  //Drawer.
  const scoreBoardDrawerHandler = () => {
    getScores().then((response) => {
      setIsScoresLoading(true);
      if (!(response instanceof Error)) {
        setIsScoresLoading(false);
        setScoreList(response);
      } else {
        return;
      }
    });
    setIsScoreDrawerOpen(true);
  };

  //Handle the High Score button from the Alert component. Open the Score Board
  //Drawer, and set state for a New High Score.
  const scoreRegisterHandler = async () => {
    scoreBoardDrawerHandler();
    setNewScore({
      name: newScore && newScore.name ? newScore.name : "",
      score: scoreCalculator(secretWord, frequency, errorCount),
      word: secretWord.join(""),
      gameDate: new Date().toLocaleDateString("en-US", {}),
      rankForScore: await getNewRank(
        scoreCalculator(secretWord, frequency, errorCount)
      ),
    });
  };

  //Controlled component for Name / Initials field in New Score Form. Update New
  //Score state name along with field.
  const scoreNameChangeHandler = (name: string) => {
    if (newScore) {
      const newScoreValue = newScore;
      newScoreValue.name = name;
      setNewScore({ ...newScoreValue });
    }
  };

  // Send New Score info and name to API, and return the message from the API.
  const handleNewScoreRegister = () => {
    newScore &&
      registerNewScore(newScore).then((data) => {
        setNewScoreRegisterMessage(data.message);
      });
    setNewScore(undefined);
    getScores().then((response) => {
      setIsScoresLoading(true);
      if (!(response instanceof Error)) {
        setIsScoresLoading(false);
        setScoreList(response);
      } else {
        return;
      }
    });
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
  //
  //
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
          <RocketWrapper
            isPlayerRocket={false}
            secretWord={secretWord}
            rightCount={rightCount}
            errorCount={errorCount}
          />
          <RocketWrapper
            isPlayerRocket={true}
            secretWord={secretWord}
            rightCount={rightCount}
            errorCount={errorCount}
          />
        </RocketContainer>
        <WordGameCardContainer>
          <Card sx={{ m: { xs: 1, sm: 2 } }}>
            <WordGameCardHeader />

            <SecretWordContainer>
              <WordGameAlert
                alertMessage={alertMessage}
                scoreRegisterHandler={scoreRegisterHandler}
              />

              <SecretWordWrapper>
                {secretWord &&
                  secretWord.map((letter: string, index: number) => (
                    <SecretLetterTile
                      secretLetter={letter}
                      index={index}
                      key={letter + index}
                      show={guessedLetters.includes(letter) || isGameOver}
                      status={secretLetterStatusHandler(letter)}
                    />
                  ))}
              </SecretWordWrapper>

              <Hint hint={hint} />
            </SecretWordContainer>

            <UserInterfaceContainer>
              <KeyboardContainer>
                <KeyboardWrapper>
                  {alpha.map((letter) => (
                    <KeyboardLetterButton
                      key={letter}
                      keyboardLetter={letter}
                      click={() => keyboardLetterHandler(letter)}
                      guessed={guessedLetters.includes(letter) || isGameOver}
                      status={keyboardLetterStatusHandler(letter)}
                    />
                  ))}
                </KeyboardWrapper>
              </KeyboardContainer>
              <ControlsContainer>
                <ErrorCountViewer errorCount={errorCount} />

                <NumberOfLettersSelector
                  numberOfLetters={numberOfLetters}
                  setNumberOfLetters={setNumberOfLetters}
                />

                <ResetButton
                  isResetNeeded={isGameOver}
                  resetGame={resetGameHandler}
                />
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
                loading={isScoresLoading}
                isDrawerOpen={isScoreDrawerOpen}
              >
                {newScore ? (
                  <NewScoreRow
                    newScore={newScore}
                    newScoreMessage={newScoreRegisterMessage}
                  >
                    <NewScoreForm
                      registerScore={handleNewScoreRegister}
                      changeHandler={scoreNameChangeHandler}
                      name={newScore.name}
                      newScoreMessage={newScoreRegisterMessage}
                    />
                  </NewScoreRow>
                ) : (
                  <></>
                )}
                {/* <ScoreTextField /> */}
                <ScoreboardTable headings={headings} scores={scoreList} />
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
