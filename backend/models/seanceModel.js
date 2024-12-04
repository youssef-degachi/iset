import mongoose from 'mongoose';
const seanceSchema = new mongoose.Schema({
  day: { type: String, required: true },
  time: { type: String, required: true },
  salle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  matiere_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Matiere' }
});

const lessonSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  salle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  matiere_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Matiere' }
});

const matiereSchema = new mongoose.Schema({
  name: { type: String, required: true },
  listteacher: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }],
  listclass: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  salleneed: { type: String },
  maxabsent: { type: Number }
});

const attendanceSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  lesson_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  date: { type: Date, required: true },
  isAbsent: { type: Boolean, required: true }
});

export const Seance = mongoose.model('Seance', seanceSchema);
export const Lesson = mongoose.model('Lesson', lessonSchema);
export const Matiere = mongoose.model('Matiere', matiereSchema);
export const Attendance = mongoose.model('Attendance', attendanceSchema);
