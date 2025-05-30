import { model, Schema } from "mongoose";

const qualitySchema = new Schema(
  {
    percent: {
      type: Number,
      min: 0,
      max: 100,
      required: [true, "percent is required"],
    },
    name: {
      type: String,
      minLength: 1,
      maxLength: 100,
      required: [true, "name is required"],
    },
  },
  { _id: false }
);

const caseSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 100,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      minLength: 10,
      maxLength: 1000,
      required: [true, "description is required"],
    },
    qualities: {
      type: [qualitySchema],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "qualities must have at least one item",
      },
      required: [true, "qualities are required"],
    },
  },
  { versionKey: false, timestamps: false }
);

export const Case = model("case", caseSchema);
