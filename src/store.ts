import { configureStore } from "@reduxjs/toolkit";
import wordGameReducer from "./features/wordGame/wordGameSlice";
import { getNewWordApi } from "./features/wordGame/wordGameApi";

export const store = configureStore({
  reducer: {
    wordGame: wordGameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
