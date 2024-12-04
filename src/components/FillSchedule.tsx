'use client'

import { useState } from 'react'
import { Button } from "./ui/button.tsx"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.tsx"
import { Input } from "./ui/input.tsx"
import { Label } from "./ui/label.tsx"
import React from 'react'

const translations = {
  en: {
    home: "Home",
    fillSchedule: "Create Schedule",
    viewSchedule: "View Schedule",
    markAbsence: "Report Absence",
    viewAbsences: "View Absences",
    language: "Language",
    subject: "Subject",
    day: "Day",
    time: "Time",
    duration: "Duration",
    teacher: "Teacher",
    classroom: "Classroom",
    search: "Search",
    submit: "Submit",
    studentView: "Student View",
    teacherView: "Teacher View",
    classroomView: "Classroom View",
    date: "Date",
    reason: "Reason",
    instructions: "Special Instructions",
    replacement: "Replacement Teacher",
    absenceType: "Absence Type",
    personal: "Personal",
    sick: "Sick",
    other: "Other",
    generate: "Generate Report",
  },
  fr: {
    home: "Accueil",
    fillSchedule: "Créer l'emploi du temps",
    viewSchedule: "Voir l'emploi du temps",
    markAbsence: "Signaler une absence",
    viewAbsences: "Voir les absences",
    language: "Langue",
    subject: "Matière",
    day: "Jour",
    time: "Heure",
    duration: "Durée",
    teacher: "Enseignant",
    classroom: "Salle de classe",
    search: "Rechercher",
    submit: "Soumettre",
    studentView: "Vue étudiant",
    teacherView: "Vue enseignant",
    classroomView: "Vue salle de classe",
    date: "Date",
    reason: "Raison",
    instructions: "Instructions spéciales",
    replacement: "Enseignant remplaçant",
    absenceType: "Type d'absence",
    personal: "Personnel",
    sick: "Maladie",
    other: "Autre",
    generate: "Générer un rapport",
  }
}

const scheduleByDay = {
  'Lundi': [
    { time: '8h30 à 10h00', subject: "Web 3.0", teacher: "Mariem JERIDI", salle: "SI 03" },
    { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LG 04" },
    { time: '11h50 à 13h20', subject: "Atelier SOA", teacher: "Ahmed NEFZAOUI", salle: "LI 06" },
    { time: '14h30 à 16h00', subject: "Atelier Framework cross-platform", teacher: "Mohamed TOUMI", salle: "SI 02" }
  ],
  'Mardi': [
    { time: '8h30 à 10h00', subject: "Méthodologie de Conception Objet", teacher: "Mariem JERIDI", salle: "SI 03" },
    { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Hamed BENNEJI", salle: "LG 04" },
    { time: '11h50 à 13h20', subject: "Atelier Base de Données Avancée", teacher: "Rayen BEN SALAH", salle: "LI 06" },
    { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
  ],
  'Mercredi': [
    { time: '8h30 à 10h00', subject: "Gestion des données Massives", teacher: "Rayen BEN SALAH", salle: "LG 04" },
    { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LI 06" },
    { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" },
    { time: '14h30 à 16h00', subject: "Atelier Base de Données Avancée", teacher: "Mohamed TOUMI", salle: "LI 06" }
  ],
  'Jeudi': [
    { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
    { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Haithem HAFSI", salle: "LI 06" },
    { time: '11h50 à 13h20', subject: "Technique de recherche d'emploi et marketing de soi", teacher: "Rayen BEN SALAH", salle: "LI 06" },
    { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
  ],
  'Vendredi': [
    { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
    { time: '10h10 à 11h40', subject: "Atelier SOA", teacher: "Rayen BEN SALAH", salle: "LG 04" },
    { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" }
  ]
};

const timeSlots = [
  '8h30 à 10h00',
  '10h10 à 11h40',
  '11h50 à 13h20',
  '14h30 à 16h00',
  '16h10 à 17h40',
];

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const teachers = [
  "Mariem JERIDI", "Wahid HAMDI", "Ahmed NEFZAOUI", "Mohamed TOUMI", "Hamed BENNEJI", "Rayen BEN SALAH", "Maher RHOUMA", "Dziriya ARFAOUI", "Haithem HAFSI", "Soufiene BEN MAHMOUD"
];

const salles = [
  "SI 01", "SI 02", "SI 03", "LG 04", "LI 06"
];

export function FillSchedule({ t }) {
  const [schedule, setSchedule] = useState(scheduleByDay);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newSubject, setNewSubject] = useState('');
  const [newTeacher, setNewTeacher] = useState('');
  const [newSalle, setNewSalle] = useState('');

  const getScheduledCourse = (day, timeSlot) => {
    if (!schedule[day]) return null;
    return schedule[day].find(course => course.time === timeSlot);
  };

  const handleCellClick = (day, timeSlot, course) => {
    setSelectedCourse(course || { day, time: timeSlot });
    setModalOpen(true);
    if (course) {
      setNewSubject(course.subject);
      setNewTeacher(course.teacher);
      setNewSalle(course.salle);
    } else {
      setNewSubject('');
      setNewTeacher('');
      setNewSalle('');
    }
  };

  const handleSubjectChange = (e) => {
    setNewSubject(e.target.value);
  };

  const handleTeacherChange = (value) => {
    setNewTeacher(value);
  };

  const handleSalleChange = (value) => {
    setNewSalle(value);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    if (selectedCourse && newSubject && newTeacher && newSalle) {
      setSchedule(prevSchedule => {
        const newSchedule = { ...prevSchedule };
        const day = selectedCourse.day;
        const time = selectedCourse.time;
        
        if (!newSchedule[day]) {
          newSchedule[day] = [];
        }
        
        const courseIndex = newSchedule[day].findIndex(course => course.time === time);
        const updatedCourse = {
          time,
          subject: newSubject,
          teacher: newTeacher,
          salle: newSalle
        };
        
        if (courseIndex !== -1) {
          newSchedule[day][courseIndex] = updatedCourse;
        } else {
          newSchedule[day].push(updatedCourse);
        }
        
        return newSchedule;
      });
      setModalOpen(false);
    }
  };

  return (
    <Card className="w-full w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Institut Supérieur des Études Technologiques de Tozeur
        </CardTitle>
        <p className="text-center">Département Technologies de l'Informatique</p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4 w-full">
          <div className="grid grid-cols-7 gap-2 mt-6 w-full">
            <div className="font-bold">Time</div>
            {days.map(day => (
              <div key={day} className="font-bold">{day}</div>
            ))}

            {timeSlots.map((timeSlot) => (
              <>
                <div key={`time-${timeSlot}`} className="font-semibold">
                  {timeSlot}
                </div>
                {days.map((day) => {
                  const course = getScheduledCourse(day, timeSlot);
                  return (
                    <div
                      key={`${day}-${timeSlot}`}
                      onClick={() => handleCellClick(day, timeSlot, course)}
                      className={`p-2 border rounded ${
                        course 
                          ? 'bg-blue-50 hover:bg-blue-100 cursor-pointer' 
                          : 'bg-gray-50 hover:bg-gray-100 cursor-pointer'
                      }`}
                    >
                      {course ? (
                        <div className="text-sm">
                          <div className="font-medium truncate">{course.subject}</div>
                          <div className="text-xs text-gray-500 truncate">{course.teacher}</div>
                          <div className="text-xs text-gray-500">{course.salle}</div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">Libre</div>
                      )}
                    </div>
                  );
                })}
              </>
            ))}
          </div>

          {modalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-1/3">
                <h3 className="font-bold text-lg mb-4">
                  {selectedCourse.subject ? 'Modifier le cours' : 'Ajouter un cours'}
                </h3>

                <div className="mb-4">
                  <Label htmlFor="subject" className="font-semibold">Matière</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={newSubject}
                    onChange={handleSubjectChange}
                    className="w-full"
                    placeholder="Entrez le nom de la matière"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="teacher" className="font-semibold">Enseignant</Label>
                  <Select value={newTeacher} onValueChange={handleTeacherChange}>
                    <SelectTrigger id="teacher" className="w-full">
                      <SelectValue placeholder="Choisir l'enseignant" />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((teacher) => (
                        <SelectItem key={teacher} value={teacher}>{teacher}</SelectItem> 
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label htmlFor="salle" className="font-semibold">Salle</Label>
                  <Select value={newSalle} onValueChange={handleSalleChange}>
                    <SelectTrigger id="salle" className="w-full">
                      <SelectValue placeholder="Choisir la salle" />
                    </SelectTrigger>
                    <SelectContent>
                      {salles.map((salle) => (
                        <SelectItem key={salle} value={salle}>{salle}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between mt-4">
                  <Button onClick={handleModalClose} variant="outline">Fermer</Button>
                  <Button onClick={handleSubmit}>Enregistrer</Button>
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}