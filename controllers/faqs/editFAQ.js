import { HttpError } from "../../helpers/index.js";
import { FAQ } from "../../models/FAQ.js";

const editFAQ = async (req, res, next) => {
  const { question, answer } = req.body;
  const { id } = req.params;
  if (!id) {
  throw HttpError(400, "Missing FAQ ID");
}
  const editedFAQ = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
  if (!editedFAQ) {
    throw HttpError(404, `Can not find faq with if ${id}`);
  }
  res.status(200).json(editedFAQ);
};

export default editFAQ;
