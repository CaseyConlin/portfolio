import { createContext, useReducer, useContext, useMemo } from "react";
import { initialState, GameContextType } from "./WordGameReducer";
import gameContextReducer from "./WordGameReducer";

const WordGameContext = createContext<GameContextType>(initialState);
interface Props {
  children: React.ReactNode;
}

const scoreHandler = (
  rightCount: number,
  errorCount: number,
  letter: string,
  secretWord: string
) => {
  if (secretWord.toUpperCase().includes(letter.toUpperCase())) {
    const regex = new RegExp(letter, "gi");
    const letterScore = (secretWord.toUpperCase().match(regex) || []).length;

    return {
      newRightCount: rightCount + letterScore,
      newErrorCount: errorCount,
    };
  } else {
    return { newRightCount: rightCount, newErrorCount: errorCount - 1 };
  }
};

export const WordGameProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(gameContextReducer, initialState);

  const setNumberOfLetters = (newNumberOfLetters: number | number[]) => {
    dispatch({
      type: "SET_NUMBER_OF_LETTERS",
      payload: {
        numberOfLetters: newNumberOfLetters,
      },
    });
  };

  const setSecretWord = (newSecretWord: string, newHint: string) => {
    dispatch({
      type: "SET_SECRET_WORD",
      payload: {
        secretWord: newSecretWord,
        hint: newHint,
      },
    });
  };

  const setApiError = (newApiError: string) => {
    dispatch({
      type: "SET_API_ERROR",
      payload: {
        apiError: newApiError,
      },
    });
  };

  const resetScores = () => {
    dispatch({
      type: "RESET_SCORES",
      payload: {
        errorCount: 5,
        rightCount: 0,
        guessedLetters: [],
        guessedLetter: "",
      },
    });
  };

  const addGuessedLetter = (newLetter: string) => {
    const updatedGuessedLetters = state.guessedLetters.concat(newLetter);

    const newScore = scoreHandler(
      state.rightCount,
      state.errorCount,
      newLetter,
      state.secretWord
    );

    dispatch({
      type: "ADD_GUESSED_LETTER",
      payload: {
        guessedLetters: updatedGuessedLetters,
        guessedLetter: newLetter,
        errorCount: newScore.newErrorCount,
        rightCount: newScore.newRightCount,
      },
    });
  };

  const memoedValue = useMemo(
    () => ({
      errorCount: state.errorCount,
      rightCount: state.rightCount,
      secretWord: state.secretWord,
      apiError: state.apiError,
      hint: state.hint,
      guessedLetter: state.guessedLetter,
      guessedLetters: state.guessedLetters,
      setSecretWord,
      setApiError,
      setNumberOfLetters,
      numberOfLetters: state.numberOfLetters,
      addGuessedLetter,
      resetScores,
    }),
    [state.guessedLetters, addGuessedLetter, setApiError]
  );
  return (
    <WordGameContext.Provider value={memoedValue}>
      {children}
    </WordGameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(WordGameContext);

  if (context === undefined) {
    throw new Error("useGameContext must be used within WordGameContext");
  }

  return context;
};
