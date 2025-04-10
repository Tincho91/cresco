"use client";
import Hero from "@/components/hero"
import ChiSiamo from "@/components/chiSiamo"
import ProcessiOperativi from "@/components/processiOperativi"
import Filosofia from "@/components/filosofia"
import Strategia from "@/components/strategia"
import Servizi from "@/components/servizi"
import Giudiziale from "@/components/giudiziale"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <ChiSiamo />
      <ProcessiOperativi />
      <Filosofia />
      <Strategia />
      <Servizi />
      <Giudiziale />
      <Contact />
    </main>

  )
}

