//Layout word game components and give context provider for word game context.
import { useState, useEffect } from "react";
import { getNewWord } from "../../Services/getNewWord";

import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// import Box from "@mui/material/Box";
import "../../App.css";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
import { grey } from "@mui/material/colors";
// import { red } from "@mui/material/colors";

import Grid from "@mui/material/Unstable_Grid2";
import "../../App.css";
import styles from "./WordGameContainer.module.css";
import { RocketContainer } from "./RocketContainer";
import { WordGameProvider } from "../../WordGameContext/WordGameContext";
// import { WordGameCard } from "./WordGameCard";

export const WordGame = () => {
  const [numberOfLetters, setNumberOfLetters] = useState(7);
  const [errorCount, setErrorCount] = useState(5);
  const [secretWord, setSecretWord] = useState([
    "L",
    "I",
    "F",
    "T",
    "O",
    "F",
    "F",
  ]);
  // const [apiError, setApiError] = useState("");
  const [hint, setHint] = useState("");
  const [rightCount, setRightCount] = useState(0);
  // const [guessedLetter, setGuessedLetter] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([""]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [alertMessage, setAlertMessage] = useState<{
    message: string;
    severity: "success" | "error";
  }>({
    message: "Alert",
    severity: "success",
  });

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
      // const regex = new RegExp(letter, "gi");
      const letterScore = (secretWord.filter((val) => val === letter) || [])
        .length;

      setRightCount(letterScore + rightCount);
    } else {
      setErrorCount(errorCount - 1);
    }
  };
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
              {/* <CardHeader
        titleTypographyProps={{
          variant: "h2",
          fontFamily: "Nasa",
          fontWeight: 200,
        }}
        subheaderTypographyProps={{
          color: "#fff",
          fontSize: "1rem",
          fontWeight: 600,
          variant: "h2",
        }}
        sx={{
          color: "#fff",
          bgcolor: red[400],
          p: 2,
          mb: 1,
          fontSize: "2.5rem",
        }}
        avatar={
          <Avatar
            sx={{
              bgcolor: "#fff",
              color: red[500],
              width: "56px",
              height: "56px",
            }}
            aria-label="rocket icon"
          >
            <RocketLaunchIcon fontSize="large" />
          </Avatar>
        }
        title="LIFT_FF"
        subheader="Guess the letters in the word below to build & launch our rocket before the other team!"
      /> */}

              {/* <Box sx={{ p: { xs: 0 }, mx: -2, justifyContent: "center" }}> */}
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
              {/* </Box> */}

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
                      <Grid
                        key={letter}
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                        spacing={0}
                        sx={{
                          aspectRatio: 1 / 1,
                        }}
                        xs={1.3}
                        sm={1.7}
                        md={2}
                      >
                        <KeyboardLetterButton
                          keyboardLetter={letter}
                          click={() => keyboardLetterHandler(letter)}
                          guessed={
                            guessedLetters.includes(letter) || isGameOver
                          }
                          right={
                            guessedLetters.includes(letter) &&
                            secretWord.includes(letter)
                          }
                          wrong={
                            guessedLetters.includes(letter) &&
                            !secretWord.includes(letter)
                          }
                        />
                      </Grid>
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

            {/* <WordGameCard
              secretWord={secretWord}
              errorCount={errorCount}
              hint={hint}
              guessedLetters={guessedLetters}
              keyboardLetterHandler={()=> keyboardLetterHandler(letter)}
            /> */}
            {/* Type 
'(letter: string) => (event: React.MouseEventHandler<HTMLButtonElement>) => void' is not assignable to type 
'(event: MouseEventHandler<HTMLButtonElement>) => [string]'.
  Types of parameters 'letter' and 'event' are incompatible.
    Type 'MouseEventHandler<HTMLButtonElement>' is not assignable to type 'string'.ts(2322 */}
            {/* Type 
'(letter: string) => (event: React.MouseEventHandler<HTMLButtonElement>) => void' is not assignable to type 
'(letter: string) => (event: MouseEventHandler<HTMLButtonElement>) => [string]'.
Call signature return types '(event: MouseEventHandler<HTMLButtonElement>) => void' and '(event: MouseEventHandler<HTMLButtonElement>) => [string]' are incompatible.
Type 'void' is not assignable to type '[string]'. */}
          </Grid>
        </Grid>
      </WordGameProvider>
    </div>
  );
};
