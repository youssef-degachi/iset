import asyncHandler from '../middleware/asyncHandler.js';
import {Class} from '../models/classModel.js';

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private/Admin
const getAllClasses = asyncHandler(async (req, res) => {
  const classes = await Class.find({}).populate('liststudent listmatiere');
  res.json(classes);
});

// @desc    Get a single class by ID
// @route   GET /api/classes/:id
// @access  Private/Admin
const getClassById = asyncHandler(async (req, res) => {
  const classData = await Class.findById(req.params.id).populate('liststudent listmatiere');

  if (classData) {
    res.json(classData);
  } else {
    res.status(404);
    throw new Error('Class not found');
  }
});

// @desc    Create a new class
// @route   POST /api/classes
// @access  Private/Admin
const createClass = asyncHandler(async (req, res) => {
  const { nameClass, liststudent, listmatiere } = req.body;

  const classData = new Class({ nameClass, liststudent, listmatiere });
  const createdClass = await classData.save();
  res.status(201).json(createdClass);
});

// @desc    Update a class
// @route   PUT /api/classes/:id
// @access  Private/Admin
const updateClass = asyncHandler(async (req, res) => {
  const { nameClass, liststudent, listmatiere } = req.body;
  const classData = await Class.findById(req.params.id);

  if (classData) {
    classData.nameClass = nameClass || classData.nameClass;
    classData.liststudent = liststudent || classData.liststudent;
    classData.listmatiere = listmatiere || classData.listmatiere;

    const updatedClass = await classData.save();
    res.json(updatedClass);
  } else {
    res.status(404);
    throw new Error('Class not found');
  }
});

// @desc    Delete a class
// @route   DELETE /api/classes/:id
// @access  Private/Admin
const deleteClass = asyncHandler(async (req, res) => {
  const classData = await Class.findById(req.params.id);

  if (classData) {
    await classData.remove();
    res.json({ message: 'Class removed' });
  } else {
    res.status(404);
    throw new Error('Class not found');
  }
});

export { getAllClasses, getClassById, createClass, updateClass, deleteClass };
