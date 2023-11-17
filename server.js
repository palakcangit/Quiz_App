import { connectDB } from "./config/database.js";
import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});
const app = express();

// Using Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(cors());

connectDB();

import quizRoutes from "./routes/quizRoutes.js";
app.use("/api/v1/quiz", quizRoutes);
export default app;

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href='#'>here</a> to visit frontend.</h1>`
  )
);
const serverApp = app.listen(process.env.PORT, () => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});
