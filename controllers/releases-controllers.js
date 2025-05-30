import { ctrlWrapper } from "../decorators/index.js";
import {
  getReleaseById,
  getReleases,
} from "./releases/index.js";

export default {
  getReleases: ctrlWrapper(getReleases),
  getReleaseById: ctrlWrapper(getReleaseById),
};