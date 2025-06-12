import express from "express";
import cors from "cors";
import { notFound } from "./App/middlewires/notFound.js";
import { ScheduleRoutes } from "./App/modules/schedule/schedule.route.js";
import globalErrorHandler from "./App/middlewires/globalError.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", ScheduleRoutes);

app.get("/", (req, res) => {
  res.send("Assalamu alaikum, EduVers server is running!");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
