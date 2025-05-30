import { ctrlWrapper } from "../decorators/index.js";
import {
  getReviews,
} from "./reviews/index.js";

export default {
  getReviews: ctrlWrapper(getReviews),
};