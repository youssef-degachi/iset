import asyncHandler from '../middleware/asyncHandler.js';
import Teacher from '../models/teacherModel.js';

// @desc    Get all teachers
// @route   GET /api/teachers
// @access  Private/Admin
const getAllTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find({});
  res.json(teachers);
});

// @desc    Get a single teacher by ID
// @route   GET /api/teachers/:id
// @access  Private/Admin
const getTeacherById = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404);
    throw new Error('Teacher not found');
  }
});

// @desc    Create a new teacher
// @route   POST /api/teachers
// @access  Private/Admin
const createTeacher = asyncHandler(async (req, res) => {
  const { name, lastname, cin, email, title, isAdmin, password } = req.body;

  const teacher = new Teacher({ name, lastname, cin, email, title, isAdmin, password });

  const createdTeacher = await teacher.save();
  res.status(201).json(createdTeacher);
});

// @desc    Update a teacher
// @route   PUT /api/teachers/:id
// @access  Private/Admin
const updateTeacher = asyncHandler(async (req, res) => {
  const { name, lastname, cin, email, title, isAdmin } = req.body;

  const teacher = await Teacher.findById(req.params.id);

  if (teacher) {
    teacher.name = name || teacher.name;
    teacher.lastname = lastname || teacher.lastname;
    teacher.cin = cin || teacher.cin;
    teacher.email = email || teacher.email;
    teacher.title = title || teacher.title;
    teacher.isAdmin = isAdmin || teacher.isAdmin;

    const updatedTeacher = await teacher.save();
    res.json(updatedTeacher);
  } else {
    res.status(404);
    throw new Error('Teacher not found');
  }
});

// @desc    Delete a teacher
// @route   DELETE /api/teachers/:id
// @access  Private/Admin
const deleteTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (teacher) {
    await teacher.remove();
    res.json({ message: 'Teacher removed' });
  } else {
    res.status(404);
    throw new Error('Teacher not found');
  }
});

export { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };
