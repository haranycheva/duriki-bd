import express from "express";
import authControllers from "../controllers/auth-controllers.js";
import { authorization, } from "../middleware/index.js";
import { validateBody } from "../decorators/index.js";
import {
  userValidationSchema,
} from "../schema/user-schema.js";

const authRouter = express.Router();

authRouter.post("/signup", authControllers.signup);

authRouter.post(
  "/signin",
  validateBody(userValidationSchema),
  authControllers.signin
);

authRouter.get("/getInfo", authorization, authControllers.getInfo);



export default authRouter;
