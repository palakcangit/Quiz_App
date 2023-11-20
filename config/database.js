import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  let connectionString =
    "mongodb+srv://palaksharmas771:qnzWanu6uMlcPgCF@cluster0.3dt7krj.mongodb.net/?retryWrites=true&w=majority";
  const { connection } = await mongoose.connect(connectionString);
  console.log(`MongoDB connected with ${connection.host}`);
};
