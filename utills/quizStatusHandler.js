import { Quiz } from "../models/Quiz.js";
import mongoose from "mongoose";
import { connectDB } from "../config/database.js";
connectDB();

// function to be executed by cron job as path is set in crontab to execute it after each 1 min to update the statuses of quizes
const updateQuizStatus = async () => {
  try {
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
