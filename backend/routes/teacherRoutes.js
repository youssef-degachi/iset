import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
} from '../controllers/teacherController.js';

const router = express.Router();

router.route('/')
  .get(getAllTeachers)        // GET /api/teachers - Get all teachers
  .post(createTeacher);       // POST /api/teachers - Create a new teacher

router.route('/:id')
  .get(getTeacherById)        // GET /api/teachers/:id - Get teacher by ID
  .put(updateTeacher)         // PUT /api/teachers/:id - Update teacher
  .delete(deleteTeacher);     // DELETE /api/teachers/:id - Delete teacher

export default router;
