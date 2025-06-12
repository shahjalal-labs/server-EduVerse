import Assignment from "./assignments.model.js";

// ✅ Create Assignment
const createAssignmentIntoDB = async (data) => {
  const assignment = new Assignment(data);
  return await assignment.save();
};

// ✅ Get All Assignments
const getAllAssignmentsFromDB = async (filter = {}) => {
  return await Assignment.find(filter).sort({ createdAt: -1 });
};

// ✅ Get Single Assignment by ID
const getAssignmentByIdFromDB = async (id) => {
  return await Assignment.findById(id);
};

// ✅ Update Assignment
const updateAssignmentIntoDB = async (id, updatedData) => {
  return await Assignment.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

// ✅ Delete Assignment (Only if creator matches)
const deleteAssignmentFromDB = async (id) => {
  const assignment = await Assignment.findById(id);
  if (!assignment) {
    throw new Error("Assignment not found");
  }

  return await Assignment.findByIdAndDelete(id);
};

export const AssignmentServices = {
  createAssignmentIntoDB,
  updateAssignmentIntoDB,
  getAssignmentByIdFromDB,
  getAllAssignmentsFromDB,
  deleteAssignmentFromDB,
};
