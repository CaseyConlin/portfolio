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

  const setSecretWord = (newSecretWord: string, newHint: string) => {
    dispatch({
      type: "SET_SECRET_WORD",
      payload: {
        secretWord: newSecretWord,
        hint: newHint,
      },
    });
  };
  const addGuessedLetter = (newLetter: string) => {
    const updatedGuessedLetters = state.guessedLetters.concat(newLetter);
    console.log("guessed" + updatedGuessedLetters);
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
      hint: state.hint,
      guessedLetter: state.guessedLetter,
      guessedLetters: state.guessedLetters,
      setSecretWord,
      addGuessedLetter,
    }),
    [state.guessedLetters, addGuessedLetter]
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

// import { createContext, useContext, useReducer } from "react";

// const WordGameContext = createContext<any>(null);

// const WordGameDispatchContext = createContext<any>(null);

// interface Props {
//   children: React.ReactNode;
// }

// export function WordGameProvider({ children }: Props) {
//   const [tasks, dispatch] = useReducer(wordGameReducer, initialTasks);

//   return (
//     <WordGameContext.Provider value={tasks}>
//       <WordGameDispatchContext.Provider value={dispatch}>
//         {children}
//       </WordGameDispatchContext.Provider>
//     </WordGameContext.Provider>
//   );
// }

// export function useWordGameContext() {
//   return useContext(WordGameContext);
// }

// export function useWordGameDispatchContext() {
//   return useContext(WordGameDispatchContext);
// }

// function wordGameReducer(state: any, action: any) {
//   const
//   switch (action.type) {
//     case "added": {
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "letterGuessed": {
//       if (isLetterGuessed) setIsLetterShowing(isLetterGuessed){

//         return(isLetterGuessed)
//       };
//     }
//     case "changed": {
//       return state.map((t: any) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "deleted": {
//       return state.filter((t: any) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// const initialTasks = [
//   { id: 0, text: "Philosopher’s Path", done: true },
//   { id: 1, text: "Visit the temple", done: false },
//   { id: 2, text: "Drink matcha", done: false },
// ];
