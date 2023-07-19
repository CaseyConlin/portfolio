import { useState, useEffect } from "react";

import { RocketContainer } from "./RocketContainer";
import { RocketWrapper } from "./RocketWrapper";
import { WordGameCardContainer } from "./WordGameCardContainer";
import { WordGameCardHeader } from "./WordGameCardHeader";
import { SecretWordContainer } from "./SecretWordContainer";
import { SecretWordWrapper } from "./SecretWordWrapper";
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
import { WordGameCardDrawer } from "./WordGameCardDrawer";
import { Hint } from "./Hint";

import { getNewWord } from "../../Services/getNewWord";
import { winMessages, loseMessages } from "./alertMessages";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Unstable_Grid2";

import "../../App.css";
import styles from "./WordGameContainer.module.css";

export const WordGame = () => {
  const [numberOfLetters, setNumberOfLetters] = useState<number | number[]>(7);
  const [errorCount, setErrorCount] = useState(5);
  const [hint, setHint] = useState("");
  const [rightCount, setRightCount] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([""]);
  const [isGameOver, setIsGameOver] = useState(false);
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

  //Grab a word from the API once on page load.
  useEffect(() => {
    getNewWord(numberOfLetters).then((response) => {
      if (response && response.word) {
        setSecretWord(Array.from(response.word));
        setHint(response.hint);
      }
      if (response && response.apiError)
        setAlertMessage({ message: response.apiError, severity: "error" });
    });
  }, []);

  //Listen for state changes that mean the player has won or lost.
  useEffect(() => {
    if (errorCount === 0 || rightCount === secretWord.length) {
      setIsGameOver(true);
    }
    if (rightCount === secretWord.length) {
      setAlertWin();
    }
    if (errorCount === 0) {
      setAlertLose();
    }
  }, [errorCount, rightCount]);
  const alpha = Array.from(Array(26)).map((_, i) =>
    String.fromCharCode(i + 65)
  );

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

  const setAlertWin = () => {
    setAlertMessage({
      message:
        winMessages[Math.floor(Math.random() * (winMessages.length - 0) + 0)],
      severity: "success",
    });
  };

  const setAlertLose = () => {
    setAlertMessage({
      message:
        loseMessages[Math.floor(Math.random() * (loseMessages.length - 0) + 0)],
      severity: "error",
    });
  };

  const resetGameHandler = () => {
    setErrorCount(5);
    setRightCount(0);
    setGuessedLetters([]);
    setIsGameOver(false);
    setAlertMessage({ message: "Alert", severity: "success" });
    getNewWord(numberOfLetters).then((response) => {
      if (response && response.word && response.hint) {
        setSecretWord(Array.from(response.word));
        setHint(response.hint);
      }
      if (response && response.apiError)
        setAlertMessage({ message: response.apiError, severity: "error" });
    });
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(isOpen);
    };

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

  const onKeyDown = (event: KeyboardEvent) => {
    const newKey = event.key.toUpperCase();
    if (
      newKey.length === 1 &&
      alpha.includes(newKey) &&
      !guessedLetters.includes(newKey)
    ) {
      return keyboardLetterHandler(newKey);
    }
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
              <WordGameAlert alertMessage={alertMessage} />

              <SecretWordWrapper>
                {secretWord &&
                  secretWord.map((letter: string, index: number) => (
                    <SecretLetterTile
                      secretLetter={letter}
                      index={index}
                      key={letter + index}
                      show={guessedLetters.includes(letter) || isGameOver}
                      right={isGameOver && guessedLetters.includes(letter)}
                      wrong={isGameOver && !guessedLetters.includes(letter)}
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
                      right={
                        guessedLetters.includes(letter) &&
                        secretWord.includes(letter)
                      }
                      wrong={
                        guessedLetters.includes(letter) &&
                        !secretWord.includes(letter)
                      }
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
            <CardActions onClick={() => setIsDrawerOpen(true)}>
              <Button sx={{ color: "#000" }}>
                <VideogameAssetIcon
                  fontSize="large"
                  sx={{ paddingRight: "10px" }}
                />
                <Typography> Game Info</Typography>
                <KeyboardArrowRightIcon />
              </Button>
            </CardActions>
            <WordGameCardDrawer
              toggleDrawer={toggleDrawer}
              isDrawerOpen={isDrawerOpen}
            />
          </Card>
        </WordGameCardContainer>
      </Grid>
    </div>
  );
};
