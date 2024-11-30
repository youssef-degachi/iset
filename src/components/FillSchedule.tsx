'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx"
import ScheduleGrid from './ScheduleGrid.tsx'
import CourseModal from './CourseModal.tsx'
import { scheduleData, timeSlots, days, teachers, salles } from '../data/ScheduleData.ts'
import React from 'react'

export default function FillSchedule({ t }) {
  const [schedule, setSchedule] = useState(scheduleData);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCellClick = (day, timeSlot, course) => {
    setSelectedCourse(course || { day, time: timeSlot });
    setModalOpen(true);
  };

  const handleSubmit = (updatedCourse) => {
    setSchedule(prevSchedule => {
      const newSchedule = { ...prevSchedule };
      const day = selectedCourse.day;
      const time = selectedCourse.time;
      
      if (!newSchedule[day]) {
        newSchedule[day] = [];
      }
      
      const courseIndex = newSchedule[day].findIndex(course => course.time === time);
      
      if (courseIndex !== -1) {
        newSchedule[day][courseIndex] = updatedCourse;
      } else {
        newSchedule[day].push(updatedCourse);
      }
      
      return newSchedule;
    });
    setModalOpen(false);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Institut Supérieur des Études Technologiques de Tozeur
        </CardTitle>
        <p className="text-center">Département Technologies de l'Informatique</p>
      </CardHeader>
      <CardContent>
        <ScheduleGrid 
          schedule={schedule}
          timeSlots={timeSlots}
          days={days}
          onCellClick={handleCellClick}
        />
        {modalOpen && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setModalOpen(false)}
            onSubmit={handleSubmit}
            teachers={teachers}
            salles={salles}
            t={t}
          />
        )}
      </CardContent>
    </Card>
  );
}