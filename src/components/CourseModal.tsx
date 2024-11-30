import { useState, useEffect } from 'react'
import { Button } from "./ui/button.tsx"
import { Input } from "./ui/input.tsx"
import { Label } from "./ui/label.tsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.tsx"
import React from 'react'

export default function CourseModal({ course, onClose, onSubmit, teachers, salles, t }) {
  const [newSubject, setNewSubject] = useState('');
  const [newTeacher, setNewTeacher] = useState('');
  const [newSalle, setNewSalle] = useState('');

  useEffect(() => {
    if (course) {
      setNewSubject(course.subject || '');
      setNewTeacher(course.teacher || '');
      setNewSalle(course.salle || '');
    }
  }, [course]);

  const handleSubmit = () => {
    if (newSubject && newTeacher && newSalle) {
      onSubmit({
        ...course,
        subject: newSubject,
        teacher: newTeacher,
        salle: newSalle
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h3 className="font-bold text-lg mb-4">
          {course.subject ? t.modifyCourse : t.addCourse}
        </h3>

        <div className="mb-4">
          <Label htmlFor="subject" className="font-semibold">{t.subject}</Label>
          <Input
            id="subject"
            type="text"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="w-full"
            placeholder={t.enterSubjectName}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="teacher" className="font-semibold">{t.teacher}</Label>
          <Select value={newTeacher} onValueChange={setNewTeacher}>
            <SelectTrigger id="teacher" className="w-full">
              <SelectValue placeholder={t.selectTeacher} />
            </SelectTrigger>
            <SelectContent>
              {teachers.map((teacher) => (
                <SelectItem key={teacher} value={teacher}>{teacher}</SelectItem> 
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <Label htmlFor="salle" className="font-semibold">{t.classroom}</Label>
          <Select value={newSalle} onValueChange={setNewSalle}>
            <SelectTrigger id="salle" className="w-full">
              <SelectValue placeholder={t.selectClassroom} />
            </SelectTrigger>
            <SelectContent>
              {salles.map((salle) => (
                <SelectItem key={salle} value={salle}>{salle}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-between mt-4">
          <Button onClick={onClose} variant="outline">{t.close}</Button>
          <Button onClick={handleSubmit}>{t.save}</Button>
        </div>
      </div>
    </div>
  );
}