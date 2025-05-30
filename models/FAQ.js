import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const faqSchema = new Schema(
  {
    question: {
      type: String,
      required: [true, "question is required"],
      minLength: 5,
      maxLength: 300,
      trim: true,
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
      minLength: 10,
      maxLength: 2000,
      trim: true,
    },
  },
  { versionKey: false, timestamps: false }
);

faqSchema.post("save", handleSaveError);
faqSchema.pre("findOneAndUpdate", preUpdate);
faqSchema.post("findOneAndUpdate", handleSaveError);

export const FAQ = model("faq", faqSchema);
