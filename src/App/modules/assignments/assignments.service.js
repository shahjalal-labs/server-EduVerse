import Assignment from "./assignments.model";

// ✅ Create Assignment
export const createAssignment = async (data) => {
  const assignment = new Assignment(data);
  return await assignment.save();
};

// ✅ Get All Assignments
export const getAllAssignments = async (filter = {}) => {
  return await Assignment.find(filter).sort({ createdAt: -1 });
};

// ✅ Get Single Assignment by ID
export const getAssignmentById = async (id) => {
  return await Assignment.findById(id);
};

// ✅ Update Assignment
export const updateAssignment = async (id, updatedData) => {
  return await Assignment.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

// ✅ Delete Assignment (Only if creator matches)
export const deleteAssignment = async (id, userEmail) => {
  const assignment = await Assignment.findById(id);
  if (!assignment) {
    throw new Error("Assignment not found");
  }

  if (assignment.creatorEmail !== userEmail) {
    const err = new Error(
      "You don't have permission to delete this assignment",
    );
    err.statusCode = 403;
    throw err;
  }

  return await Assignment.findByIdAndDelete(id);
};
