import express from "express";
import casesControllers from "../controllers/cases-controllers.js";


const casesRouter = express.Router();

casesRouter.get("/", casesControllers.getCases);

export default casesRouter;
