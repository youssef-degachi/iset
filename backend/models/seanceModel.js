const mongoose = require('mongoose');

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

module.exports = mongoose.model('Seance', seanceSchema);
module.exports = mongoose.model('Lesson', lessonSchema);
module.exports = mongoose.model('Matiere', matiereSchema);
module.exports = mongoose.model('Attendance', attendanceSchema);
