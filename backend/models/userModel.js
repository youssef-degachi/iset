import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  cin: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  cin: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, default: false },
  title: { type: String, required: true },
  password: { type: String, required: true }
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  cin: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  password: { type: String, required: true }
});



export const Admin = mongoose.model('Admin', adminSchema);
export const Teacher = mongoose.model('Teacher', teacherSchema);
export const Student = mongoose.model('Student', studentSchema);
