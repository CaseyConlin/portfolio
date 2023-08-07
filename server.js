import express from "express";
import ViteExpress from "vite-express";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
connectDB();
