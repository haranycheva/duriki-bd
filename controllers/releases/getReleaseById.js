import { Release } from "../../models/Release.js";

const getReleaseById = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    throw HttpError(400, "Missing release ID");
  }
  const release = await Release.findById(id);
  res.json(release);
};

export default getReleaseById;
