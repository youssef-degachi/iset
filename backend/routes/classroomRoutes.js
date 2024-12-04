import express from 'express';
import {
  getAllClassrooms,
  getClassroomById,
  createClassroom,
  updateClassroom,
  deleteClassroom
} from '../controllers/classroomController.js';

const router = express.Router();

router.route('/')
  .get(getAllClassrooms)       // GET /api/classrooms - Get all classrooms
  .post(createClassroom);      // POST /api/classrooms - Create a new classroom

router.route('/:id')
  .get(getClassroomById)       // GET /api/classrooms/:id - Get classroom by ID
  .put(updateClassroom)        // PUT /api/classrooms/:id - Update classroom
  .delete(deleteClassroom);    // DELETE /api/classrooms/:id - Delete classroom

export default router;
