// Run getNewWord API call to get a secret word once at page load. Listen to
// context for changes to secret word, and update the secret word and necessary
// letters. Map secretword letters to secret letter tiles.
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useGameContext } from "../../WordGameContext/WordGameContext";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
const winMessages = [
  " 😀 You totally won! 😀 ",
  " 📚 You're a human dictionary! 📚 ",
  " ⚔️ You're the word warrrior! ⚔️ ",
  " 🔓 You're a letter locksmith! 🔓 ",
  " 🔫 No word can hide from you! 🔫 ",
];
const loseMessages = [
  " ☹️ Words are hard. ☹️ ",
  " 🔥 You'll get 'em next time 🔥 ",
  " 💩 That hint was bogus, right? 💩 ",
  " ♻️C'mon, try again. You got this!♻️ ",
  " 🦆 Is that even a word?? 🦆 ",
  " ⌨️ This game is probably just coded badly. ⌨️ ",
];
const alertAnimationVariant = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      mass: 1,
      stiffness: 45,
    },
  },
  exit: {
    y: 50,
    transition: {
      type: "spring",
      damping: 10,
      mass: 1,
      stiffness: 45,
    },
  },
};

export const WordGameAlert = () => {
  const [isAlert, setIsAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("Alert");
  const [alertSeverity, setAlertServerity] = useState<"success" | "error">(
    "success"
  );

  const {
    guessedLetters,
    rightCount,
    errorCount,
    secretWord,
    setApiError,
    apiError,
  } = useGameContext();

  const AlertMotion = motion(Alert);

  const errorMessage = (errMessage: string) => {
    if (errMessage !== "") {
      setIsAlert(true);
      setAlertMessage(errMessage);
      setAlertServerity("error");
    }
    if (errMessage !== apiError) {
      console.log("hey");
      setIsAlert(false);
      setAlertMessage(errMessage);
      setAlertServerity("success");
    }
  };

  const setAlertWin = () => {
    setAlertMessage(
      winMessages[Math.floor(Math.random() * (winMessages.length - 0) + 0)]
    );
    setAlertServerity("success");
  };

  const setAlertLose = () => {
    setAlertMessage(
      loseMessages[Math.floor(Math.random() * (loseMessages.length - 0) + 0)]
    );
    setAlertServerity("error");
  };

  useEffect(() => {
    if (secretWord && (rightCount === secretWord.length || errorCount === 0)) {
      setIsAlert(true);

      if (errorCount === 0) {
        setAlertLose();
      } else {
        setAlertWin();
      }
    }
  }, [errorCount, rightCount]);

  useEffect(() => {
    if (guessedLetters.length === 0) {
      setIsAlert(false);
    }
  }, [guessedLetters]);

  useEffect(() => {
    errorMessage(apiError);
  }, [apiError, setApiError]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <AlertMotion
        sx={{
          visibility: isAlert ? "visible" : "hidden",
          justifyContent: "center",
          fontSize: "1rem",
        }}
        severity={alertSeverity}
        variants={alertAnimationVariant}
        animate="animate"
        exit="exit"
      >
        {alertMessage}
      </AlertMotion>
    </Box>
  );
};
