import express from 'express';
import teacherRoutes from './routes/teacherRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import classroomRoutes from './routes/classroomRoutes.js';
import classRoutes from './routes/classRoutes.js';
import seanceRoutes from './routes/seanceRoutes.js';
import lessonRoutes from './routes/lessonRoutes.js';
import matiereRoutes from './routes/matiereRoutes.js';
import connectDB from './db/connectDB.js'
import dotenv from 'dotenv';
const app = express();

app.use(express.json());

dotenv.config(); // to let me read variables from .env by  (process.env)
connectDB() // connect db


app.use(express.json()); //to read json from request 
app.use(express.urlencoded({ extended:true })); //accept data from 'form html' for fetching data  

// => connect
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/classrooms', classroomRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/seances', seanceRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/matieres', matiereRoutes);
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
