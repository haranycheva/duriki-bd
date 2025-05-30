import express from "express";
import cors from "cors";
import authRouter from "./routes/auth-router.js";
import reviewsRouter from "./routes/reviews-router.js";
import releasesRouter from "./routes/releases-router.js";
import swaggerDocument from "./swagger.json" with { type: "json" };
import swaggerui from "swagger-ui-express";
import casesRouter from "./routes/cases-router.js";
import faqsRouter from "./routes/faqs-router.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);

app.use("/reviews", reviewsRouter)

app.use("/releases", releasesRouter)

app.use("/cases", casesRouter)

app.use("/faqs", faqsRouter)

app.use("/api/docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status ? err.status : 500).json({ message: err.message });
});

export default app;
