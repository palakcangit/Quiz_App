import { Quiz } from "../models/Quiz.js";
import { errorHandler } from "../utills/errorHandler.js";

export const createQuiz = async (req, res, next) => {
  let { questions, startDate, endDate } = req.body;
  if (!questions || !options || !rightAnswer || !startDate || !endDate) {
    errorHandler(
      "Send All Reuired Data:- questions, startDate, endDate ",
      400,
      res
    );
  } else {
    try {
      let quiz = await Quiz.create({
        questions,
        startDate,
        endDate,
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
