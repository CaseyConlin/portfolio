export const initialState = {
  errorCount: 5,
  secretWord: "",
  hint: "",
  rightCount: 0,
  guessedLetter: "",
  guessedLetters: [],
  setSecretWord: (word: string, hint: string) => {
    word;
    hint;
  },
  addGuessedLetter: (letter: string) => {
    [letter];
  },
};

export type GameContextType = {
  errorCount: number;
  rightCount: number;
  secretWord: string;
  hint: string;
  guessedLetter: string;
  guessedLetters: string[];
  setSecretWord: (word: string, hint: string) => any;
  addGuessedLetter: (letter: string) => void;
};
const gameContextReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_SECRET_WORD":
      return {
        ...state,
        secretWord: payload.secretWord,
        hint: payload.hint,
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
