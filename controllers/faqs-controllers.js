import { ctrlWrapper } from "../decorators/index.js";
import {
  getFAQs,
  addFAQ,
  editFAQ,
  deleteFAQ
} from "./faqs/index.js";

export default {
  getFAQs: ctrlWrapper(getFAQs),
  addFAQ: ctrlWrapper(addFAQ),
  editFAQ: ctrlWrapper(editFAQ),
  deleteFAQ: ctrlWrapper(deleteFAQ),
};