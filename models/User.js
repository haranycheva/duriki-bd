import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";
import { emailReg } from "../regex/regex.js";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      minLength: 1,
      maxLength: 40,
      required: [true, "firstName is required"],
    },
    secondName: {
      type: String,
      minLength: 1,
      maxLength: 40,
      required: [true, "secondName is required"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "password is required"],
    },
    email: {
      type: String,
      match: emailReg,
      unique: true,
      required: [true, "email is required"],
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleSaveError);
userSchema.pre("findOneAndUpdate", preUpdate);
userSchema.post("findOneAndUpdate", handleSaveError);

export const User = model("user", userSchema);
