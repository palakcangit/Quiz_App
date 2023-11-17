import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const schema = new mongoose.Schema(
  {
    questions: [
      {
        question: {
          type: String,
          required: true,
        },
        options: {
          a: {
            type: String,
            required: true,
          },
          b: {
            type: String,
            required: true,
          },
          c: {
            type: String,
            required: true,
          },
          d: {
            type: String,
            required: true,
          },
        },
        rightAnswer: {
          type: String,
          required: true,
        },
      },
    ],
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["inactive", "active", "finished"],
    },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Quiz = mongoose.model("Quiz", schema);
export { Quiz };
