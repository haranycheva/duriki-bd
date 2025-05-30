import { ctrlWrapper } from "../decorators/index.js";
import {
  getInfo,
  signin,
  signup,
} from "./auth/index.js";

export default {
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
  getInfo: ctrlWrapper(getInfo),
};