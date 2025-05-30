import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const pictureSchema = new Schema(
  {
    large: {
      type: String,
      default: null,
    },
    medium: {
      type: String,
      default: null,
    },
    small: {
      type: String,
      required: [true, "small image URL is required"],
    },
  },
  { _id: false }
);

const releaseSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 5,
      maxLength: 200,
      required: [true, "title is required"],
    },
    location: {
      type: String,
      minLength: 2,
      maxLength: 100,
      required: [true, "location is required"],
    },
    date: {
      type: String,
      match: /^\d{4}-\d{2}-\d{2}$/, 
      required: [true, "date is required"],
    },
    description: {
      type: String,
      minLength: 10,
      maxLength: 1000,
      required: [true, "description is required"],
    },
    picture: {
      type: pictureSchema,
      required: true,
    },
  },
  { versionKey: false, timestamps: false }
);
releaseSchema.post("save", handleSaveError);
releaseSchema.pre("findOneAndUpdate", preUpdate);
releaseSchema.post("findOneAndUpdate", handleSaveError);

export const Release = model("release", releaseSchema);
