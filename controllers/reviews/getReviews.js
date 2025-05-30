import { Review } from "../../models/Review.js";

const getReviews = async(_, res, next) => {
    const reviews = await Review.find()
    res.json(reviews)
};

export default getReviews
