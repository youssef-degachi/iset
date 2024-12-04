import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card.tsx'
import { Award, BookOpen, GraduationCap, Link, Users } from 'lucide-react'
import { Button } from './ui/button.tsx'


function HomePage() {
  return (
    <>
    <main className="flex-1">
    {/* Hero Section */}
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            ISET Tozeur
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-primary-foreground/90 md:text-xl">
            Institut Supérieur des Etudes Technologiques de Tozeur
          </p>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <GraduationCap className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-3xl font-bold">600</h3>
            <p className="text-sm text-muted-foreground">Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <BookOpen className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-3xl font-bold">60</h3>
            <p className="text-sm text-muted-foreground">Teachers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Users className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-3xl font-bold">12</h3>
            <p className="text-sm text-muted-foreground">Clubs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Award className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-3xl font-bold">1500</h3>
            <p className="text-sm text-muted-foreground">Graduates</p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* News Section */}
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Latest News</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              {/* <Image
                src="/placeholder.svg"
                alt="News"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              /> */}
              <h3 className="text-xl font-bold mb-2">International Forum</h3>
              <p className="text-muted-foreground">Forum International sur les Métiers Numériques</p>
              <Button variant="link" className="mt-4 p-0">
                Read More
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              {/* <Image
                src="/placeholder.svg"
                alt="News"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              /> */}
              <h3 className="text-xl font-bold mb-2">Internship Procedures</h3>
              <p className="text-muted-foreground">Procédure des stages - ISET Tozeur</p>
              <Button variant="link" className="mt-4 p-0">
                Read More
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              {/* <Image
                src="/placeholder.svg"
                alt="News"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              /> */}
              <h3 className="text-xl font-bold mb-2">Student Activities</h3>
              <p className="text-muted-foreground">Latest campus activities and events</p>
              <Button variant="link" className="mt-4 p-0">
                Read More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="w-full border-t bg-background">
    <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:py-12">
      <div className="flex items-center space-x-2">
        {/* <Image
          src="/placeholder.svg"
          alt="ISET Logo"
          width={30}
          height={30}
          className="rounded"
        /> */}
        <span className="text-sm font-semibold">© 2024 ISET Tozeur</span>
      </div>
      <nav className="flex gap-4 text-sm">
        <Link href="#" className="text-muted-foreground hover:text-primary">
          Contact
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-primary">
          Privacy Policy
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-primary">
          Terms
        </Link>
      </nav>
    </div>
  </footer>
  </>
  )
}

export default HomePage