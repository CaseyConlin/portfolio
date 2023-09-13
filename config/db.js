import mongoose from "mongoose";
import process from "process";
import "dotenv/config";

export const connectDB = () => {
  const mongoPW = process.env.MONGO_DB_PW;
  const uri = `mongodb+srv://caseyconlin:${mongoPW}@cluster0.ycitv2e.mongodb.net/UserScores?retryWrites=true&w=majority`;

  const connect = async () => {
    try {
      await mongoose.connect(uri, { useNewUrlParser: true });
      console.log("MongoDb is connected.");
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  connect().catch(console.dir);
};
