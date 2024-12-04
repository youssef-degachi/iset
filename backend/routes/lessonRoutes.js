import express from 'express';
import {
  getAllLessons,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson
} from '../controllers/lessonController.js';

const router = express.Router();

router.route('/')
  .get(getAllLessons)          // GET /api/lessons - Get all lessons
  .post(createLesson);         // POST /api/lessons - Create a new lesson

router.route('/:id')
  .get(getLessonById)          // GET /api/lessons/:id - Get lesson by ID
  .put(updateLesson)           // PUT /api/lessons/:id - Update lesson
  .delete(deleteLesson);       // DELETE /api/lessons/:id - Delete lesson

export default router;
