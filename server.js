import express from "express";
import ViteExpress from "vite-express";
import { connectDB } from "./config/db.js";
import UserScoresRouter from "./routes/userScoresRouter.js";
const app = express();

app.get("/message", (_, res) => res.send("Hello from express!"));
// app.get("/userscores", (_, res) => res.send("hello"));
app.use("/scores", UserScoresRouter);

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
connectDB();
