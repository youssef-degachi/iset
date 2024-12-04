import mongoose from 'mongoose';
const classSchema = new mongoose.Schema({
  nameClass: { type: String, required: true },
  liststudent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  listmatiere: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Matiere' }]
});


const classroomSchema = new mongoose.Schema({
  namesalle: { type: String, required: true },
  typesalle: { type: String, required: true }
});

export const Class= mongoose.model('Class', classSchema);
export const Classroom = mongoose.model('Classroom', classroomSchema);
