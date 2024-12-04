'use client'
import { useState } from 'react'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.tsx"
import {ViewSchedule} from '../components/ViewSchedule.tsx'
import {MarkAbsence} from '../components/MarkAbsence.tsx'
import {ViewAbsences} from '../components/ViewAbsences.tsx'
import LanguageSelector from '../components/LanguageSelector.tsx'
import { translations } from '../data/translations.ts'
import React from 'react'
import EntityManager from '../components/EntityManger.tsx'
import { FillSchedule } from '../components/FillSchedule.tsx'
import HomePage from '../components/HomePage.tsx'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [language, setLanguage] = useState('en')

  const t = translations[language]

  const renderContent = () => {
    switch(currentPage) {
      case 'home': return <HomePage/>
      case 'fillSchedule': return <FillSchedule t={t} />
      case 'viewSchedule': return <ViewSchedule  />
      case 'markAbsence': return <MarkAbsence  />
      case 'viewAbsences': return <ViewAbsences />
      case 'entityManger': return <EntityManager />
      default: return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to School Management System</h2>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground p-4">
        <nav className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Button variant="ghost" onClick={() => setCurrentPage('home')}>{t.home}</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('fillSchedule')}>{t.fillSchedule}</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('viewSchedule')}>{t.viewSchedule}</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('markAbsence')}>{t.markAbsence}</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('viewAbsences')}>{t.viewAbsences}</Button>
            <Button variant="ghost" onClick={() => setCurrentPage('entityManger')}>{t.EntityManager}</Button>
          </div>
          <LanguageSelector language={language} setLanguage={setLanguage} t={t} />
        </nav>
      </header>
      <main className="flex-grow p-4">
        <Card>
          <CardHeader>
            <CardTitle>{t[currentPage]}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderContent()}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}