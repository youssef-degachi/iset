'use client'

import { useState } from 'react'
import React from 'react';
import {   Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.tsx";
import { Button } from './ui/button.tsx';
import { Input } from './ui/input.tsx';
import { Label } from './ui/label.tsx';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card.tsx'

import { translations } from '../data/translations.ts'

export function MarkAbsence({ language = 'en' }: { language?: string }) {
  const [teacherName, setTeacherName] = useState('')
  const [date, setDate] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Absence reported:', { teacherName, date, reason })
    // Reset form
    setTeacherName('')
    setDate('')
    setReason('')
  }

  const t = translations[language]

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.markAbsence}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="teacherName">{t.teacherName}</Label>
              <Input
                id="teacherName"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">{t.date}</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="reason">{t.reason}</Label>
              <Select onValueChange={setReason} required>
                <SelectTrigger>
                  <SelectValue placeholder={t.selectReason} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sick">{t.sick}</SelectItem>
                  <SelectItem value="personal">{t.personal}</SelectItem>
                  <SelectItem value="other">{t.other}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit">{t.submit}</Button>
      </CardFooter>
    </Card>
  )
}