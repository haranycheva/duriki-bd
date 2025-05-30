import express from "express";
import faqsControllers from "../controllers/faqs-controllers.js";
import authorization from "../middleware/authorization.js";


const faqsRouter = express.Router();

faqsRouter.get("/", faqsControllers.getFAQs);
faqsRouter.post("/", authorization, faqsControllers.addFAQ);
faqsRouter.put("/:id", authorization, faqsControllers.editFAQ);
faqsRouter.delete("/:id", authorization, faqsControllers.deleteFAQ);

export default faqsRouter;
