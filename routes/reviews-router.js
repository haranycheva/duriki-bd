import express from "express";
import reviewsControllers from "../controllers/reviews-controllers.js";


const reviewsRouter = express.Router();

reviewsRouter.get("/", reviewsControllers.getReviews);

export default reviewsRouter;
