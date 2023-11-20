import { Quiz } from "../models/Quiz.js";
import { errorHandler } from "../utills/errorHandler.js";

export const createQuiz = async (req, res, next) => {
  let { questions, startDate, endDate } = req.body;
  // handle error if all required fileds are not come in reuesr body
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
      // decide status of quiz on the time of creating 
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

export const getActiceQuizes = async (req, res, next) => {
  let { page, perPage } = req.query;
  try {
    // return quiz but not right answers
    let quizes = await Quiz.find({ status: "active" }).select(
      "-questions.rightAnswer"
    );
    return res.status(200).json({
      success: true,
      message: "Active Quiz Created",
      quizes,
    });
  } catch (error) {
    errorHandler(error.message, 400, res);
  }
};

export const getResult = async (req, res, next) => {
  let { id } = req.params;
  try {
    let quizes = await Quiz.findById(id);
    let currentTime = new Date().toISOString();
    console.log(currentTime < quizes.endDate.toISOString());
    // check if quiz is finished or not if quiz is not finished then return suitable message
    if (currentTime < quizes.endDate.toISOString()) {
      return res.status(403).json({
        success: false,
        message:
          "Quiz Is Not Finished Yet , Not Allowed to Access This Resource",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Active Quiz Created",
      quizes,
    });
  } catch (error) {
    errorHandler(error.message, 400, res);
  }
};

export const getAllQuizes = async (req, res, next) => {
  try {
    let quizes = await Quiz.find({}).select("-questions.rightAnswer");
    return res.status(200).json({
      success: true,
      message: "Active Quiz Created",
      quizes,
    });
  } catch (error) {
    errorHandler(error.message, 400, res);
  }
};
