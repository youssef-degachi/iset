// import type { Metadata } from 'next'
import './globals.css'
import LanguageSelector  from '../components/LanguageSelector'
import React from 'react'


export const metadata = {
  title: 'School Management System',
  description: 'A comprehensive system for managing school schedules and absences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <header className="bg-primary text-primary-foreground p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">School Management System</h1>
            <LanguageSelector language={undefined} setLanguage={undefined} t={undefined} />
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}