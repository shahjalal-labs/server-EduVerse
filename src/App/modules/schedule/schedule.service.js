import { ObjectId } from "mongodb";
import { getDb } from "../../config/db.js";

const getScheduleCollection = () => {
  const scheduleCollection = getDb().collection("schedule");
  return scheduleCollection;
};
/* const getCoffeeCollection = () => {
  // const db = await getDB();
  const coffeeCollection = getDB().collection("coffees");
  // const userCollection = () => getDB().collection("users");

  return coffeeCollection;
}; */
const createSchedueleIntoDB = async (payload) => {
  const response = await getScheduleCollection().insertOne(payload);
  return response;
};

const createMultipleStudentIntoDB = async (schedules) => {
  const response = await getScheduleCollection().insertMany(schedules);
  return response;
};

const getScheduleFromDB = async () => {
  const response = await getScheduleCollection().find().toArray();
  return response;
};

const getSingleScheduleFromDB = async (id) => {
  const response = await getScheduleCollection().findOne({
    _id: new ObjectId(id),
  });
  return response;
};

const updateScheduleIntoDB = async (id, payload) => {
  const filter = {
    _id: new ObjectId(id),
  };

  const updatedSchedule = {
    $set: payload,
  };

  const options = {
    upsert: true,
  };

  const response = await getScheduleCollection().updateOne(
    filter,
    updatedSchedule,
    options,
  );
  return response;
};

const deleteScheduleFromDB = async (id) => {
  const filter = {
    _id: new ObjectId(id),
  };
  const response = await getScheduleCollection().deleteOne(filter);
  return response;
};

export const SceduleServices = {
  createSchedueleIntoDB,
  getScheduleFromDB,
  getSingleScheduleFromDB,
  updateScheduleIntoDB,
  deleteScheduleFromDB,
  createMultipleStudentIntoDB,
};
