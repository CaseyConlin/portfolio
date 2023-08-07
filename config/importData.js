import fs from "fs";
import { UserScore } from "../models/userScore.js";
import process from "process";
import { connectDB } from "./db.js";

connectDB();

//read json file
const usersScores = JSON.parse(
  fs.readFileSync(`./config/sample-data.json`, "utf-8")
);

//import data to db
const importData = async () => {
  try {
    await UserScore.create(usersScores);
    console.log("Data successfully loaded");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await UserScore.deleteMany();
    console.log("Data successfully deleted");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};
// importData();
