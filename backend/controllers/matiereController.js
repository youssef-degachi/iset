import asyncHandler from '../middleware/asyncHandler.js';
import {Matiere} from '../models/seanceModel.js';

// @desc    Get all subjects (matieres)
// @route   GET /api/matieres
// @access  Private/Admin
const getAllMatieres = asyncHandler(async (req, res) => {
  const matieres = await Matiere.find({});
  res.json(matieres);
});

// @desc    Get a single subject (matiere) by ID
// @route   GET /api/matieres/:id
// @access  Private/Admin
const getMatiereById = asyncHandler(async (req, res) => {
  const matiere = await Matiere.findById(req.params.id);

  if (matiere) {
    res.json(matiere);
  } else {
    res.status(404);
    throw new Error('Matiere not found');
  }
});

// @desc    Create a new subject (matiere)
// @route   POST /api/matieres
// @access  Private/Admin
const createMatiere = asyncHandler(async (req, res) => {
  const { name, listteacher, listclass, salleneed, maxabsent } = req.body;

  const matiere = new Matiere({
    name,
    listteacher,
    listclass,
    salleneed,
    maxabsent,
  });

  const createdMatiere = await matiere.save();
  res.status(201).json(createdMatiere);
});

// @desc    Update a subject (matiere)
// @route   PUT /api/matieres/:id
// @access  Private/Admin
const updateMatiere = asyncHandler(async (req, res) => {
  const { name, listteacher, listclass, salleneed, maxabsent } = req.body;

  const matiere = await Matiere.findById(req.params.id);

  if (matiere) {
    matiere.name = name || matiere.name;
    matiere.listteacher = listteacher || matiere.listteacher;
    matiere.listclass = listclass || matiere.listclass;
    matiere.salleneed = salleneed || matiere.salleneed;
    matiere.maxabsent = maxabsent || matiere.maxabsent;

    const updatedMatiere = await matiere.save();
    res.json(updatedMatiere);
  } else {
    res.status(404);
    throw new Error('Matiere not found');
  }
});

// @desc    Delete a subject (matiere)
// @route   DELETE /api/matieres/:id
// @access  Private/Admin
const deleteMatiere = asyncHandler(async (req, res) => {
  const matiere = await Matiere.findById(req.params.id);

  if (matiere) {
    await matiere.deleteOne();
    res.json({ message: 'Matiere removed' });
  } else {
    res.status(404);
    throw new Error('Matiere not found');
  }
});

export {
  getAllMatieres,
  getMatiereById,
  createMatiere,
  updateMatiere,
  deleteMatiere,
};
