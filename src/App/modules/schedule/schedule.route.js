import { Router } from "express";
import { SchedulesControllers } from "./schedule.controller.js";

const router = Router();

router.post("/create-schedules", SchedulesControllers.createMultipleSchedule);
router.get("/schedules", SchedulesControllers.getSchedules);

export const ScheduleRoutes = router;
