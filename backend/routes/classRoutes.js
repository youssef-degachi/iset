import express from 'express';
import {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
} from '../controllers/classController.js';

const router = express.Router();

router.route('/')
  .get(getAllClasses)          // GET /api/classes - Get all classes
  .post(createClass);          // POST /api/classes - Create a new class

router.route('/:id')
  .get(getClassById)           // GET /api/classes/:id - Get class by ID
  .put(updateClass)            // PUT /api/classes/:id - Update class
  .delete(deleteClass);        // DELETE /api/classes/:id - Delete class

export default router;
