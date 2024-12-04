import asyncHandler from '../middleware/asyncHandler.js';
import Lesson from '../models/lessonModel.js';

// @desc    Get all lessons
// @route   GET /api/lessons
// @access  Private/Admin
const getAllLessons = asyncHandler(async (req, res) => {
  const lessons = await Lesson.find({}).populate('salle_id teacher_id class_id matiere_id');
  res.json(lessons);
});

// @desc    Get a single lesson by ID
// @route   GET /api/lessons/:id
// @access  Private/Admin
const getLessonById = asyncHandler(async (req, res) => {
  const lesson = await Lesson.findById(req.params.id).populate('salle_id teacher_id class_id matiere_id');

  if (lesson) {
    res.json(lesson);
  } else {
    res.status(404);
    throw new Error('Lesson not found');
  }
});

// @desc    Create a new lesson
// @route   POST /api/lessons
// @access  Private/Admin
const createLesson = asyncHandler(async (req, res) => {
  const { date, salle_id, teacher_id, class_id, matiere_id } = req.body;

  const lesson = new Lesson({ date, salle_id, teacher_id, class_id, matiere_id });
  const createdLesson = await lesson.save();
  res.status(201).json(createdLesson);
});

// @desc    Update a lesson
// @route   PUT /api/lessons/:id
// @access  Private/Admin
const updateLesson = asyncHandler(async (req, res) => {
  const { date, salle_id, teacher_id, class_id, matiere_id } = req.body;
  const lesson = await Lesson.findById(req.params.id);

  if (lesson) {
    lesson.date = date || lesson.date;
    lesson.salle_id = salle_id || lesson.salle_id;
    lesson.teacher_id = teacher_id || lesson.teacher_id;
    lesson.class_id = class_id || lesson.class_id;
    lesson.matiere_id = matiere_id || lesson.matiere_id;

    const updatedLesson = await lesson.save();
    res.json(updatedLesson);
  } else {
    res.status(404);
    throw new Error('Lesson not found');
  }
});

// @desc    Delete a lesson
// @route   DELETE /api/lessons/:id
// @access  Private/Admin
const deleteLesson = asyncHandler(async (req, res) => {
  const lesson = await Lesson.findById(req.params.id);

  if (lesson) {
    await lesson.remove();
    res.json({ message: 'Lesson removed' });
  } else {
    res.status(404);
    throw new Error('Lesson not found');
  }
});

export { getAllLessons, getLessonById, createLesson, updateLesson, deleteLesson };
