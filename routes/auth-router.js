import express from "express";
import authControllers from "../controllers/auth-controllers.js";
import { authorization, } from "../middleware/index.js";
import { validateBody } from "../decorators/index.js";
import {
  signInValidationSchema,
  userValidationSchema,
} from "../schema/user-schema.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(userValidationSchema), authControllers.signup);

authRouter.post(
  "/signin",
  validateBody(signInValidationSchema),
  authControllers.signin
);

authRouter.get("/getInfo", authorization, authControllers.getInfo);



export default authRouter;
