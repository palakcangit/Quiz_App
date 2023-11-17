import express from "express";

import { createQuiz } from "../controllers/quizController.js";

const router = express.Router();

router.route("/createQuiz").post(createQuiz);

export default router;
