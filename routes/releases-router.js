import express from "express";
import releasesControllers from "../controllers/releases-controllers.js";


const releasesRouter = express.Router();

releasesRouter.get("/", releasesControllers.getReleases);
releasesRouter.get("/:id", releasesControllers.getReleaseById);

export default releasesRouter;
