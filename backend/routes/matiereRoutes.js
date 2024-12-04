import express from 'express';
import {
  getAllMatieres,
  getMatiereById,
  createMatiere,
  updateMatiere,
  deleteMatiere
} from '../controllers/matiereController.js';

const router = express.Router();

router.route('/')
  .get(getAllMatieres)         // GET /api/matieres - Get all subjects (matieres)
  .post(createMatiere);        // POST /api/matieres - Create a new subject (matiere)

router.route('/:id')
  .get(getMatiereById)         // GET /api/matieres/:id - Get subject by ID
  .put(updateMatiere)          // PUT /api/matieres/:id - Update subject
  .delete(deleteMatiere);      // DELETE /api/matieres/:id - Delete subject

export default router;
