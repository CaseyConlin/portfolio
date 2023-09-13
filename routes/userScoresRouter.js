import express from "express";
import userScoresController from "../controllers/userScoresController.js";
const UserScoresRouter = express.Router();

UserScoresRouter.get("/test", (req, res) => {
  res.send("hello user score seeker");
});
UserScoresRouter.route("/list").get(userScoresController.getScores);
UserScoresRouter.route("/getRank").post(userScoresController.getRank);
UserScoresRouter.route("/newScore").post(userScoresController.postScores);

export default UserScoresRouter;
