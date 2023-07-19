import { useState, useEffect } from "react";
import { getNewWord } from "../../Services/getNewWord";
import { RocketContainer } from "./RocketContainer";
import { WordGameCardHeader } from "./WordGameCardHeader";
import { SecretWordSection } from "./SecretWordSection";
import { KeyboardContainer } from "./KeyboardContainer";
import { KeyboardLetterButton } from "./KeyboardLetterButton";
import { SecretWordContainer } from "./SecretWordContainer";
import { WordGameAlert } from "./WordGameAlert";
import { SecretLetterTile } from "./SecretLetterTile";
import { ResetButton } from "./ResetButton";
import { NumberOfLettersSelector } from "./NumberOfLettersSelector";
import { ErrorCountViewer } from "./ErrorCountView";
import { WordGameCardDrawer } from "./WordGameCardDrawer";
import { Hint } from "./Hint";
import { winMessages, loseMessages } from "./alertMessages";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
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
    console.log(guessedLetters);
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
    console.log(newKey);
    console.log(event);
    console.log(guessedLetters);

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
          <RocketContainer
            isPlayerRocket={false}
            secretWord={secretWord}
            rightCount={rightCount}
            errorCount={errorCount}
          />
          <RocketContainer
            isPlayerRocket={true}
            secretWord={secretWord}
            rightCount={rightCount}
            errorCount={errorCount}
          />
        </Grid>
        <Grid xs={12} sm={7} lg={6}>
          <Card sx={{ m: { xs: 1, sm: 2 } }}>
            <WordGameCardHeader />

            <SecretWordSection>
              <WordGameAlert alertMessage={alertMessage} />
              <SecretWordContainer>
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
              </SecretWordContainer>

              <Hint hint={hint} />
            </SecretWordSection>

            <Grid
              className="input-grid"
              container
              py={1}
              justifyContent={"center"}
              sx={{
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: grey[200],
                boxShadow: "1px -1px 3px  #212121 ",
              }}
            >
              <Grid justifyContent="center" xs={12} md={7}>
                <KeyboardContainer>
                  {alpha.map((letter) => (
                    <KeyboardLetterButton
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
                </KeyboardContainer>
              </Grid>
              <Grid
                container
                flexDirection={{ xs: "row", md: "column" }}
                flexWrap={"wrap"}
                justifyContent={{ xs: "space-around", md: "flex-start" }}
                xs={12}
                md={4}
              >
                <ErrorCountViewer errorCount={errorCount} />
                <NumberOfLettersSelector
                  numberOfLetters={numberOfLetters}
                  setNumberOfLetters={setNumberOfLetters}
                />
                <ResetButton
                  isResetNeeded={isGameOver}
                  resetGame={resetGameHandler}
                />
              </Grid>
            </Grid>
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
        </Grid>
      </Grid>
    </div>
  );
};
