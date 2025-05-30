import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const reviewSchema = new Schema(
  {
    review: {
      type: String,
      minLength: 1,
      maxLength: 40,
      required: [true, "review is required"],
    },
    author: {
      type: String,
      minLength: 1,
      maxLength: 20,
      required: [true, "author is required"],
    },
  },
  { versionKey: false, timestamps: false }
);
reviewSchema.post("save", handleSaveError);
reviewSchema.pre("findOneAndUpdate", preUpdate);
reviewSchema.post("findOneAndUpdate", handleSaveError);

export const Review = model("review", reviewSchema);
