import { UserScore } from "../models/userScore.js";

const userScoresController = {};

userScoresController.getScores = async (req, res) => {
  const userScores = await UserScore.find();
  res.status(200).json(userScores);
  // .catch((err) =>
  //   req.status(404).json({ noPetFound: "We can't find that pet..." })
  // );
};

userScoresController.postScores = async (req, res) => {
  const userScore = req.body;

  const newUserScore = new UserScore({
    name: userScore.name,
    score: userScore.score,
    word: userScore.word,
    gameDate: new Date(),
  });
  newUserScore.save(
    res
      .status(200)
      .json({ message: `${userScore.name} score ${userScore.score} saved!` })
  );
};
export default userScoresController;
