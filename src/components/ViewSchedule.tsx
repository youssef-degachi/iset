'use client'

import { useState } from 'react'
import { Button } from './ui/button.tsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select.tsx'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card.tsx'
import  ScheduleGrid from './ScheduleGrid.tsx'
import { Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table.tsx";
import { translations } from '../data/translations.ts'
import { scheduleData } from '../data/ScheduleData.ts'
import React from 'react'





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


export function ViewSchedule({ language = 'en' }: { language?: string }) {
  const [viewType, setViewType] = useState('student')
  const [selectedEntity, setSelectedEntity] = useState('')

  const t = translations[language]

  const getEntities = () => {
    switch (viewType) {
      case 'student':
        return Object.keys(scheduleData.students)
      case 'teacher':
        return Object.keys(scheduleData.teachers)
      case 'classroom':
        return Object.keys(scheduleData.classrooms)
      default:
        return []
    }
  }

  const getSchedule = () => {
    if (!selectedEntity) return null
    switch (viewType) {
      case 'student':
        return scheduleData.students[selectedEntity]|| [];
      case 'teacher':
        return scheduleData.teachers[selectedEntity]|| [];
      case 'classroom':
        return scheduleData.classrooms[selectedEntity] || [];
      default:
        return null
    }
  }

  return (
    // <Card>
    //   <CardHeader>
    //     <CardTitle>{t.viewSchedule}</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="grid w-full items-center gap-4">
    //       <Select onValueChange={setViewType}>
    //         <SelectTrigger>
    //           <SelectValue placeholder={t.selectViewType} />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectItem value="student">{t.student}</SelectItem>
    //           <SelectItem value="teacher">{t.teacher}</SelectItem>
    //           <SelectItem value="classroom">{t.classroom}</SelectItem>
    //         </SelectContent>
    //       </Select>
    //       <Select onValueChange={setSelectedEntity}>
    //         <SelectTrigger>
    //           <SelectValue placeholder={t.selectEntity} />
    //         </SelectTrigger>
    //         <SelectContent>
    //           {getEntities().map((entity) => (
    //             <SelectItem key={entity} value={entity}>
    //               {entity}
    //             </SelectItem>
    //           ))}
    //         </SelectContent>
    //       </Select>
    //       {selectedEntity && <ScheduleGrid schedule={getSchedule()} timeSlots={undefined} days={undefined} onCellClick={undefined}  />}
    //     </div>
    //   </CardContent>
    // </Card>


    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <>
    <Tabs defaultValue="student">
    <TabsList>
      <TabsTrigger value="student">{t.studentView}</TabsTrigger>
      <TabsTrigger value="teacher">{t.teacherView}</TabsTrigger>
      <TabsTrigger value="classroom">{t.classroomView}</TabsTrigger>
    </TabsList>
    <TabsContent value="student">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t.time}</TableHead>
            <TableHead>{t.subject}</TableHead>
            <TableHead>{t.teacher}</TableHead>
            <TableHead>{t.classroom}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(scheduleByDay).flatMap(([day, courses]) =>
            courses.map((course, index) => (
              <TableRow key={`${day}-${index}`}>
                <TableCell>{course.time}</TableCell>
                <TableCell>{course.subject}</TableCell>
                <TableCell>{course.teacher}</TableCell>
                <TableCell>{course.salle}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TabsContent>
    <TabsContent value="teacher">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t.teacher}</TableHead>
            <TableHead>{t.day}</TableHead>
            <TableHead>{t.time}</TableHead>
            <TableHead>{t.subject}</TableHead>
            <TableHead>{t.classroom}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(scheduleByDay).flatMap(([day, courses]) =>
            courses.map((course, index) => (
              <TableRow key={`${day}-${index}`}>
                <TableCell>{course.teacher}</TableCell>
                <TableCell>{day}</TableCell>
                <TableCell>{course.time}</TableCell>
                <TableCell>{course.subject}</TableCell>
                <TableCell>{course.salle}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TabsContent>
    <TabsContent value="classroom">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t.classroom}</TableHead>
            <TableHead>{t.day}</TableHead>
            <TableHead>{t.time}</TableHead>
            <TableHead>{t.subject}</TableHead>
            <TableHead>{t.teacher}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(scheduleByDay).flatMap(([day, courses]) =>
            courses.map((course, index) => (
              <TableRow key={`${day}-${index}`}>
                <TableCell>{course.salle}</TableCell>
                <TableCell>{day}</TableCell>
                <TableCell>{course.time}</TableCell>
                <TableCell>{course.subject}</TableCell>
                <TableCell>{course.teacher}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TabsContent>
  </Tabs>
    </>
  )
}