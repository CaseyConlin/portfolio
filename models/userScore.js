import mongoose from "mongoose";

const userScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your initials."],
  },
  score: {
    type: Number,
    required: [true],
  },
  word: {
    type: String,
    required: [true],
  },
  gameDate: {
    type: Date,
    required: [true],
  },
});

export const UserScore = mongoose.model("UserScore", userScoreSchema);
