import express from 'express';
import {
  getAllSeances,
  getSeanceById,
  createSeance,
  updateSeance,
  deleteSeance
} from '../controllers/seanceController.js';

const router = express.Router();

router.route('/')
  .get(getAllSeances)          // GET /api/seances - Get all seances
  .post(createSeance);         // POST /api/seances - Create a new seance

router.route('/:id')
  .get(getSeanceById)          // GET /api/seances/:id - Get seance by ID
  .put(updateSeance)           // PUT /api/seances/:id - Update seance
  .delete(deleteSeance);       // DELETE /api/seances/:id - Delete seance

export default router;
