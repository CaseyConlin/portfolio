import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewWord } from "../../Services/getNewWord";
import {
  getScores,
  getNewRank,
  registerNewScore,
} from "../../Services/scoreboard";
import {
  loseMessages,
  winMessages,
  scoreCalculator,
} from "../../Components/WordGame/utils/wordGameUtils";
import { RootState } from "../../store";

// The modified $SELECTION_PLACEHOLDER$ code with is located in the `keyboardLetterHandler` reducer of the `wordGameSlice.tsx` file.
// The modified `$SELECTION_PLACEHOLDER$` code with is located in the keyboardLetterHandler reducer of the wordGameSlice.tsx file.

type InitialState = {
  numberOfLetters: number;
  secretWord: string[];
  hint: string;
  frequency: number;
  rightCount: number;
  errorCount: number;
  guessedLetters: string[];
  isGameOver: boolean;
  alertMessage: { message: string; severity: "success" | "error" };
  scoreList: userScore[] | [];
  newScoreRank: number | undefined;
  playerScore: number | undefined;
  newScore: userScore | undefined;
  newScoreMessage: string | undefined;
};

export const fetchNewWordByLetterCount = createAsyncThunk(
  "wordGame/fetchNewWordByLetterCount",
  async (numberOfLettersVar: number) => {
    const response = await getNewWord(numberOfLettersVar);

    return response;
  }
);

export const fetchScores = createAsyncThunk(
  "wordGame/fetchScores",
  async () => {
    const response = await getScores();
    return response;
  }
);

export const initScore = createAsyncThunk(
  "wordGame/initScore",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const calcScore = scoreCalculator(
      state.wordGame.secretWord,
      state.wordGame.frequency,
      state.wordGame.errorCount
    );
    const response: userScore = {
      name: state.wordGame.newScore ? state.wordGame.newScore.name : "",
      score: calcScore,
      word: state.wordGame.secretWord.join(""),
      gameDate: new Date().toLocaleDateString("en-US", {}),
      rankForScore: await getNewRank(calcScore),
    };
    return response;
  }
);

export const fetchRank = createAsyncThunk(
  "wordGame/getRank",
  async (newScore: number) => {
    const response = await getNewRank(newScore);

    return response;
  }
);

export const setNewScore = createAsyncThunk(
  "wordGame/setNewScore",
  async (newScore: number) => {
    const response = await getNewRank(newScore);

    return response;
  }
);

export const postNewScore = createAsyncThunk(
  "wordGame/registerNewScore",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const response =
      state.wordGame.newScore &&
      (await registerNewScore(state.wordGame.newScore));
    return response.message;
  }
);

const initialState: InitialState = {
  numberOfLetters: 7,
  secretWord: ["L", "I", "F", "T", "O", "F", "F"],
  hint: "",
  frequency: 0,
  rightCount: 0,
  errorCount: 5,
  guessedLetters: [""],
  isGameOver: false,
  alertMessage: { message: "Alert", severity: "success" },
  scoreList: [],
  newScoreRank: undefined,
  playerScore: undefined,
  newScore: undefined,
  newScoreMessage: undefined,
};

export const wordGameSlice = createSlice({
  name: "wordGame",
  initialState: initialState,
  reducers: {
    keyboardLetterHandler: (state, action) => {
      state.guessedLetters = [...state.guessedLetters, action.payload];
      if (state.secretWord.includes(action.payload)) {
        const letterScore = (
          state.secretWord.filter((val) => val === action.payload) || []
        ).length;
        state.rightCount = letterScore + state.rightCount;
      } else {
        state.errorCount = state.errorCount - 1;
      }
      if (
        state.errorCount === 0 ||
        state.rightCount === state.secretWord.length
      ) {
        state.isGameOver = true;
        state.rightCount == state.secretWord.length
          ? (state.alertMessage = {
              message: winMessages[1],
              severity: "success",
            })
          : (state.alertMessage = {
              message: loseMessages[1],
              severity: "error",
            });
      }
    },
    handleSetLetters: (state, action) => {
      state.numberOfLetters = action.payload;
    },
    resetGameHandler: (state) => {
      state.errorCount = 5;
      state.rightCount = 0;
      state.guessedLetters = [];
      state.isGameOver = false;
      state.alertMessage = { message: "Alert", severity: "success" };
      state.newScoreMessage = undefined;
      state.newScore = undefined;
    },
    setPlayerScore: (state) => {
      state.playerScore = scoreCalculator(
        state.secretWord,
        state.frequency,
        state.errorCount
      );
    },
    setPlayerName: (state, action) => {
      if (state.newScore) state.newScore.name = action.payload;
    },
    initNewScore: (state) => {
      if (state.playerScore && state.newScoreRank) {
        state.newScore = {
          name: "",
          score: state.playerScore,
          word: state.secretWord.join(""),
          gameDate: new Date().toLocaleDateString("en-US", {}),
          rankForScore: state.newScoreRank,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewWordByLetterCount.fulfilled, (state, action) => {
      if ("word" in action.payload) {
        state.secretWord = Array.from(action.payload.word);
        state.frequency = action.payload.frequency;
        state.hint = action.payload.hint;
      }
      if ("message" in action.payload) {
        state.alertMessage = {
          message: action.payload.message,
          severity: "error",
        };
      }
    });
    builder.addCase(fetchScores.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        state.scoreList = [...action.payload];
      }
    });
    builder.addCase(fetchRank.fulfilled, (state, action) => {
      state.newScoreRank = action.payload;
    });
    builder.addCase(postNewScore.fulfilled, (state, action) => {
      state.newScoreMessage = action.payload;
    });
    builder.addCase(initScore.fulfilled, (state, action) => {
      state.newScore = action.payload;
    });
  },
});

export const {
  keyboardLetterHandler,
  handleSetLetters,
  resetGameHandler,
  setPlayerScore,
  initNewScore,
  setPlayerName,
} = wordGameSlice.actions;

export default wordGameSlice.reducer;
