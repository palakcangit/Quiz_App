import express from "express";

import {
  createQuiz,
  getActiceQuizes,
  getResult,
  getAllQuizes,
} from "../controllers/quizController.js";

const router = express.Router();

router.route("/quizzes").post(createQuiz);
router.route("/quizzes/active").get(getActiceQuizes);
router.route("/quizzes/:id/result").get(getResult);
router.route("/quizzes/all").get(getAllQuizes);
export default router;
