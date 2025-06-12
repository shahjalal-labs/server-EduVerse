import sendResponse from "../../utils/sendResponse.js";
import { SceduleServices } from "./schedule.service.js";

const createSchedule = async (req, res) => {
  const scedule = req.body;
};

const createMultipleSchedule = async (req, res, next) => {
  const schedules = req.body;
  const response = await SceduleServices.createMultipleStudentIntoDB(schedules);
  sendResponse(res, {
    success: true,
    message: "Schedules are created successfully",
    data: response,
  });
};

const getSchedules = async (req, res, next) => {
  try {
    const response = await SceduleServices.getScheduleFromDB();
    sendResponse(res, {
      success: true,
      message: "Schedules are fetched successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const SchedulesControllers = {
  createSchedule,
  createMultipleSchedule,
  getSchedules,
};
