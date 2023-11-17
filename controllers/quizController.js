import { Quiz } from "../models/Quiz.js";
import { errorHandler } from "../utills/errorHandler.js";

export const createQuiz = async (req, res, next) => {
  let { questions, startDate, endDate } = req.body;
  if (!questions || !startDate || !endDate) {
    errorHandler(
      "Send All Reuired Data:- questions, startDate, endDate ",
      400,
      res
    );
  } else {
    try {
      let startTimeOfQuiz = new Date(startDate).toLocaleDateString();
      let endTimeOfQuiz = new Date(endDate).toLocaleDateString();
      let currentTime = new Date().setHours(0, 0, 0, 0);
      currentTime = new Date(currentTime).toLocaleDateString();
      let status;
      if (startTimeOfQuiz > currentTime) {
        status = "inactive";
      } else if (endTimeOfQuiz < currentTime) {
        status = "finished";
      } else if (
        currentTime >= startTimeOfQuiz &&
        currentTime <= endTimeOfQuiz
      ) {
        status = "active";
      }
      let quiz = await Quiz.create({
        questions,
        startDate,
        endDate,
        status,
      });
      return res.status(200).json({
        success: true,
        message: "Quiz Created",
        quiz,
      });
    } catch (error) {
      errorHandler(error.message, 400, res);
    }
  }
};
