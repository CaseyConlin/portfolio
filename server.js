import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import UserScoresRouter from "./routes/userScoresRouter.js";

const app = express();
ViteExpress.config({ mode: "production" });

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/message", (_, res) => res.send("Hello from express!"));
// app.get("/userscores", (_, res) => res.send("hello"));
app.use("/scores", UserScoresRouter);

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
connectDB();
