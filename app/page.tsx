import BeamsBackground from "@/components/ui/beamsBackground"
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
    <>
  <BeamsBackground />

  <main className="relative z-10 flex flex-col">
    <Hero />
    <ChiSiamo />
    <ProcessiOperativi />
    <Filosofia />
    <Strategia />
    <Servizi />
    <Giudiziale />
    <Contact />
  </main>
</>
  )
}

