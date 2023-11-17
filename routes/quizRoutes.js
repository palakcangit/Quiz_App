import express from "express";

import { createQuiz,getActiceQuizes } from "../controllers/quizController.js";

const router = express.Router();

router.route("/quizzes").post(createQuiz);
router.route("/quizzes/active").get(getActiceQuizes);
export default router;
