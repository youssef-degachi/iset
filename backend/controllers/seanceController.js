import asyncHandler from '../middleware/asyncHandler.js';
import Seance from '../models/seanceModel.js';

// @desc    Get all seances
// @route   GET /api/seances
// @access  Private/Admin
const getAllSeances = asyncHandler(async (req, res) => {
  const seances = await Seance.find({}).populate('salle_id teacher_id class_id matiere_id');
  res.json(seances);
});

// @desc    Get a single seance by ID
// @route   GET /api/seances/:id
// @access  Private/Admin
const getSeanceById = asyncHandler(async (req, res) => {
  const seance = await Seance.findById(req.params.id).populate('salle_id teacher_id class_id matiere_id');

  if (seance) {
    res.json(seance);
  } else {
    res.status(404);
    throw new Error('Seance not found');
  }
});

// @desc    Create a new seance
// @route   POST /api/seances
// @access  Private/Admin
const createSeance = asyncHandler(async (req, res) => {
  const { day, time, salle_id, teacher_id, class_id, matiere_id } = req.body;

  const seance = new Seance({ day, time, salle_id, teacher_id, class_id, matiere_id });
  const createdSeance = await seance.save();
  res.status(201).json(createdSeance);
});

// @desc    Update a seance
// @route   PUT /api/seances/:id
// @access  Private/Admin
const updateSeance = asyncHandler(async (req, res) => {
  const { day, time, salle_id, teacher_id, class_id, matiere_id } = req.body;
  const seance = await Seance.findById(req.params.id);

  if (seance) {
    seance.day = day || seance.day;
    seance.time = time || seance.time;
    seance.salle_id = salle_id || seance.salle_id;
    seance.teacher_id = teacher_id || seance.teacher_id;
    seance.class_id = class_id || seance.class_id;
    seance.matiere_id = matiere_id || seance.matiere_id;

    const updatedSeance = await seance.save();
    res.json(updatedSeance);
  } else {
    res.status(404);
    throw new Error('Seance not found');
  }
});

// @desc    Delete a seance
// @route   DELETE /api/seances/:id
// @access  Private/Admin
const deleteSeance = asyncHandler(async (req, res) => {
  const seance = await Seance.findById(req.params.id);

  if (seance) {
    await seance.remove();
    res.json({ message: 'Seance removed' });
  } else {
    res.status(404);
    throw new Error('Seance not found');
  }
});

export { getAllSeances, getSeanceById, createSeance, updateSeance, deleteSeance };
