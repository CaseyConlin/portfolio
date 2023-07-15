export const initialState = {
  numberOfLetters: 7,
  errorCount: 5,
  secretWord: "liftoff",
  apiError: "",
  hint: "",
  rightCount: 0,
  guessedLetter: "",
  guessedLetters: [],
  setSecretWord: (word: string, hint: string) => {
    word;
    hint;
  },
  setApiError: (apiError: string) => {
    apiError;
  },
  setNumberOfLetters: (number: number | number[]) => {
    number;
  },
  addGuessedLetter: (letter: string) => {
    [letter];
  },
  resetScores: () => {
    /**/
  },
};

export type GameContextType = {
  numberOfLetters: number | number[];
  errorCount: number;
  rightCount: number;
  secretWord: string;
  apiError: string;
  hint: string;
  guessedLetter: string;
  guessedLetters: string[];
  setSecretWord: (word: string, hint: string) => any;
  setApiError: (apiError: string) => any;
  setNumberOfLetters: (number: number | number[]) => void;
  addGuessedLetter: (letter: string) => void;
  resetScores: () => void;
};
const gameContextReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_NUMBER_OF_LETTERS":
      return {
        ...state,
        numberOfLetters: payload.numberOfLetters,
      };

    case "SET_SECRET_WORD":
      return {
        ...state,
        secretWord: payload.secretWord,
        hint: payload.hint,
      };
    case "SET_API_ERROR":
      return {
        ...state,
        apiError: payload.apiError,
      };

    case "RESET_SCORES":
      return {
        ...state,
        errorCount: payload.errorCount,
        rightCount: payload.rightCount,
        guessedLetter: payload.guessedLetter,
        guessedLetters: payload.guessedLetters,
      };

    case "ADD_GUESSED_LETTER":
      return {
        ...state,
        guessedLetters: payload.guessedLetters,
        guessedLetter: payload.guessedLetter,
        errorCount: payload.errorCount,
        rightCount: payload.rightCount,
      };

    default:
      throw new Error(`No case for type ${type} found in gameContextReducer.`);
  }
};

export default gameContextReducer;
