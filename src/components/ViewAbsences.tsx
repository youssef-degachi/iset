'use client'

import { useState } from 'react'
import { Button } from './ui/button.tsx'
import { Input } from './ui/input.tsx'
import { Label } from './ui/label.tsx'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card.tsx'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table.tsx'
import { translations } from '../data/translations.ts'
import React from 'react'

// Mock data for absences
const mockAbsences = [
  { id: 1, name: 'John Doe', date: '2023-06-01', reason: 'Sick' },
  { id: 2, name: 'Jane Smith', date: '2023-06-02', reason: 'Personal' },
  { id: 3, name: 'Bob Johnson', date: '2023-06-03', reason: 'Other' },
]

export function ViewAbsences({ language = 'en' }: { language?: string }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredAbsences, setFilteredAbsences] = useState(mockAbsences)

  const t = translations[language]

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = mockAbsences.filter(
      (absence) =>
        absence.name.toLowerCase().includes(term) ||
        absence.date.includes(term) ||
        absence.reason.toLowerCase().includes(term)
    )
    setFilteredAbsences(filtered)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.viewAbsences}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="search">{t.search}</Label>
          <Input
            id="search"
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.name}</TableHead>
              <TableHead>{t.date}</TableHead>
              <TableHead>{t.reason}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAbsences.map((absence) => (
              <TableRow key={absence.id}>
                <TableCell>{absence.name}</TableCell>
                <TableCell>{absence.date}</TableCell>
                <TableCell>{absence.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}