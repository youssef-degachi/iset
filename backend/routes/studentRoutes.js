import express from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';

const router = express.Router();

router.route('/')
  .get(getAllStudents)         // GET /api/students - Get all students
  .post(createStudent);        // POST /api/students - Create a new student

router.route('/:id')
  .get(getStudentById)         // GET /api/students/:id - Get student by ID
  .put(updateStudent)          // PUT /api/students/:id - Update student
  .delete(deleteStudent);      // DELETE /api/students/:id - Delete student

export default router;
