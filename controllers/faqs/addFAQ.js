import { HttpError } from "../../helpers/index.js";
import { FAQ } from "../../models/FAQ.js";

const addFAQ = async (req, res, next) => {
  const {question, answer} = req.body
  const newFAQ = await FAQ.create({
   question,
   answer
  });
  if (!newFAQ) {
    throw HttpError(500, `Creating failed`);
  }
  res.status(201).json(newFAQ);
};

export default addFAQ
