const mongoose = require('mongoose');

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



module.exports = mongoose.model('Admin', adminSchema);
module.exports = mongoose.model('Teacher', teacherSchema);
module.exports = mongoose.model('Student', studentSchema);
