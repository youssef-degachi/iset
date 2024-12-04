import asyncHandler from '../middleware/asyncHandler.js';
// import Classroom from '../models/classroomModel.js';
 import {Classroom} from '../models/classModel.js';


// @desc    Get all classrooms
// @route   GET /api/classrooms
// @access  Private/Admin
const getAllClassrooms = asyncHandler(async (req, res) => {
  const classrooms = await Classroom.find({});
  res.json(classrooms);
});

// @desc    Get a single classroom by ID
// @route   GET /api/classrooms/:id
// @access  Private/Admin
const getClassroomById = asyncHandler(async (req, res) => {
  const classroom = await Classroom.findById(req.params.id);

  if (classroom) {
    res.json(classroom);
  } else {
    res.status(404);
    throw new Error('Classroom not found');
  }
});

// @desc    Create a new classroom
// @route   POST /api/classrooms
// @access  Private/Admin
const createClassroom = asyncHandler(async (req, res) => {
  const { namesalle, typesalle } = req.body;

  const classroom = new Classroom({ namesalle, typesalle });
  const createdClassroom = await classroom.save();
  res.status(201).json(createdClassroom);
});

// @desc    Update a classroom
// @route   PUT /api/classrooms/:id
// @access  Private/Admin
const updateClassroom = asyncHandler(async (req, res) => {
  const { namesalle, typesalle } = req.body;
  const classroom = await Classroom.findById(req.params.id);

  if (classroom) {
    classroom.namesalle = namesalle || classroom.namesalle;
    classroom.typesalle = typesalle || classroom.typesalle;

    const updatedClassroom = await classroom.save();
    res.json(updatedClassroom);
  } else {
    res.status(404);
    throw new Error('Classroom not found');
  }
});

// @desc    Delete a classroom
// @route   DELETE /api/classrooms/:id
// @access  Private/Admin
const deleteClassroom = asyncHandler(async (req, res) => {
  const classroom = await Classroom.findById(req.params.id);

  if (classroom) {
    await classroom.remove();
    res.json({ message: 'Classroom removed' });
  } else {
    res.status(404);
    throw new Error('Classroom not found');
  }
});

export { getAllClassrooms, getClassroomById, createClassroom, updateClassroom, deleteClassroom };
