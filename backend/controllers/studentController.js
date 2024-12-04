import asyncHandler from '../middleware/asyncHandler.js';
import {Student} from '../models/userModel.js';

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin
const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({});
  res.json(students);
});

// @desc    Get a single student by ID
// @route   GET /api/students/:id
// @access  Private/Admin
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (student) {
    res.json(student);
  } else {
    res.status(404);
    throw new Error('Student not found');
  }
});

// @desc    Create a new student
// @route   POST /api/students
// @access  Private/Admin
const createStudent = asyncHandler(async (req, res) => {
  const { name, lastname, cin, email, class_id, password } = req.body;

  const student = new Student({ name, lastname, cin, email, class_id, password });

  const createdStudent = await student.save();
  res.status(201).json(createdStudent);
});

// @desc    Update a student
// @route   PUT /api/students/:id
// @access  Private/Admin
const updateStudent = asyncHandler(async (req, res) => {
  const { name, lastname, cin, email, class_id } = req.body;

  const student = await Student.findById(req.params.id);

  if (student) {
    student.name = name || student.name;
    student.lastname = lastname || student.lastname;
    student.cin = cin || student.cin;
    student.email = email || student.email;
    student.class_id = class_id || student.class_id;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } else {
    res.status(404);
    throw new Error('Student not found');
  }
});

// @desc    Delete a student
// @route   DELETE /api/students/:id
// @access  Private/Admin
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (student) {
    await student.remove();
    res.json({ message: 'Student removed' });
  } else {
    res.status(404);
    throw new Error('Student not found');
  }
});

export { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent };
