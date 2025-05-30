import { ctrlWrapper } from "../decorators/index.js";
import {
  getCases,
} from "./cases/index.js";

export default {
  getCases: ctrlWrapper(getCases),
};