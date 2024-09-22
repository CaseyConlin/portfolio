import { UserScore } from "../models/userScore.js";

const userScoresController = {};

userScoresController.getScores = async (req, res) => {
  const userScores = await UserScore.aggregate([
    {
      $setWindowFields: {
        sortBy: { score: -1 },
        output: {
          rankForScore: {
            $denseRank: {},
          },
        },
      },
    },
  ]);
  res.status(200).json(userScores);
  // .catch((err) =>
  //   req.status(404).json({ noPetFound: "We can't find any scores..." })
  // );
};

userScoresController.getRank = async (req, res) => {
  const score = req.body.score;
  const userScores = await UserScore.aggregate([
    {
      $setWindowFields: {
        sortBy: { score: -1 },
        output: {
          rankForScore: {
            $denseRank: {},
          },
        },
      },
    },
  ]);

  let newRank = 0;

  if (score > userScores[0].score) {
    newRank = 1;
  } else {
    for (let i = 0; i < userScores.length; i++) {
      if (score === userScores[i].score) {
        newRank = userScores[i].rankForScore;
      }
      if (score < userScores[i].score) {
        newRank = userScores[i].rankForScore + 1;
      }
    }
  }
  if (newRank !== 0) {
    return res.status(200).json(newRank);
  } else res.status(404).json({ noScoreFound: "We can't rank your score..." });
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
