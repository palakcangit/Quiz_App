import { Quiz } from "../models/Quiz.js";
import mongoose from "mongoose";
import { connectDB } from "../config/database.js";
connectDB();
const updateQuizStatus = async () => {
  try {
    // Query quizzes that need status update (based on current time)
    const currentDate = new Date();

    await Quiz.updateMany(
      {
        startDate: { $lt: currentDate },
        endDate: { $gt: currentDate },
        status: "inactive",
      },
      { $set: { status: "active" } }
    );

    await Quiz.updateMany(
      { endDate: { $lt: currentDate }, status: "active" },
      { $set: { status: "finished" } }
    );

    console.log("Quiz statuses updated successfully.");
  } catch (error) {
    console.error("Error updating quiz statuses:", error);
  } finally {
    mongoose.disconnect();
  }
};

updateQuizStatus();
