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
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Chi Siamo Section */}
      <ChiSiamo />

      {/* Processi Operativi Section */}
      <ProcessiOperativi />

      {/* Filosofia e Mission Section */}
      <Filosofia />

      {/* Strategie Section */}
      <Strategia />

      {/* Servizi Section */}
      <Servizi />

      {/* Fase Giudiziale Section */}
      <Giudiziale />

      {/* Contact Section */}
      <Contact />
    </main>
  )
}

