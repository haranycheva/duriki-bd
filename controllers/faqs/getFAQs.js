import { FAQ } from "../../models/FAQ.js";

const getFAQs = async (req, res, next) => {
  const { page = 1, limit = 4 } = req.query;
  const faqs = await FAQ.find({}, "", {
    skip: (page - 1) * limit,
    limit,
  });
  res.json(faqs);
};

export default getFAQs;
