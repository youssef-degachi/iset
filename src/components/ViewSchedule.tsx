'use client'

import { useState } from 'react'
import { Button } from './ui/button.tsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select.tsx'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card.tsx'
import  ScheduleGrid from './ScheduleGrid.tsx'
import { translations } from '../data/translations.ts'
import { scheduleData } from '../data/ScheduleData.ts'
import React from 'react'

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
        return scheduleData.students[selectedEntity]
      case 'teacher':
        return scheduleData.teachers[selectedEntity]
      case 'classroom':
        return scheduleData.classrooms[selectedEntity]
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.viewSchedule}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <Select onValueChange={setViewType}>
            <SelectTrigger>
              <SelectValue placeholder={t.selectViewType} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">{t.student}</SelectItem>
              <SelectItem value="teacher">{t.teacher}</SelectItem>
              <SelectItem value="classroom">{t.classroom}</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectedEntity}>
            <SelectTrigger>
              <SelectValue placeholder={t.selectEntity} />
            </SelectTrigger>
            <SelectContent>
              {getEntities().map((entity) => (
                <SelectItem key={entity} value={entity}>
                  {entity}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedEntity && <ScheduleGrid schedule={getSchedule()} timeSlots={undefined} days={undefined} onCellClick={undefined}  />}
        </div>
      </CardContent>
    </Card>
  )
}