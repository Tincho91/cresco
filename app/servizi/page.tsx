import Image from "next/image"
import Link from "next/link"

export default function Servizi() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section for Services */}
      <section className="relative h-[300px]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">I NOSTRI SERVIZI</h1>
            <p className="text-white text-xl">Soluzioni personalizzate per il recupero crediti</p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#ffc107] h-1 w-16 mb-4"></div>
              <h2 className="text-[#0a2240] text-2xl md:text-3xl font-bold mb-4">RECUPERO CREDITI EXPORT</h2>
              <p className="text-gray-700 mb-6">
                Il nostro servizio di recupero crediti internazionale è progettato per aiutare le aziende a recuperare i
                crediti da clienti situati all'estero. Grazie alla nostra rete globale di partner e alla nostra
                esperienza nel settore, siamo in grado di gestire efficacemente il recupero dei crediti in diverse
                giurisdizioni.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>Recupero stragiudiziale e giudiziale</li>
                <li>Gestione di portafogli o singoli crediti</li>
                <li>Copertura globale in oltre 130 paesi</li>
                <li>Approccio personalizzato per ogni caso</li>
              </ul>
              <Link
                href="/contatti"
                className="bg-[#0a2240] text-white px-6 py-3 inline-block hover:bg-[#0a2240]/90 transition-colors"
              >
                RICHIEDI INFORMAZIONI
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Recupero Crediti Export"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Recupero Crediti Italia"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="bg-[#ffc107] h-1 w-16 mb-4"></div>
              <h2 className="text-[#0a2240] text-2xl md:text-3xl font-bold mb-4">RECUPERO CREDITI ITALIA</h2>
              <p className="text-gray-700 mb-6">
                Il nostro servizio di recupero crediti in Italia è specializzato nel supportare le aziende nel recupero
                dei crediti B2B sul territorio nazionale. Offriamo soluzioni efficaci sia per la gestione di portafogli
                di crediti che per singole posizioni.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>Recupero stragiudiziale e giudiziale</li>
                <li>Servizi dedicati alle aziende B2B</li>
                <li>Gestione di portafogli o singoli crediti</li>
                <li>Approccio professionale e rispettoso</li>
              </ul>
              <Link
                href="/contatti"
                className="bg-[#0a2240] text-white px-6 py-3 inline-block hover:bg-[#0a2240]/90 transition-colors"
              >
                RICHIEDI INFORMAZIONI
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#ffc107] h-1 w-16 mb-4"></div>
              <h2 className="text-[#0a2240] text-2xl md:text-3xl font-bold mb-4">CESSIONE CREDITI</h2>
              <p className="text-gray-700 mb-6">
                Offriamo servizi di advisory per operazioni NPL (Non-Performing Loans) e soluzioni innovative per la
                pubblica amministrazione. Il nostro team di esperti fornisce consulenza specializzata per la gestione e
                la cessione dei crediti problematici.
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>Advisory su operazioni NPL</li>
                <li>Soluzioni per la pubblica amministrazione</li>
                <li>Valutazione dei portafogli di crediti</li>
                <li>Strutturazione di operazioni di cessione</li>
              </ul>
              <Link
                href="/contatti"
                className="bg-[#0a2240] text-white px-6 py-3 inline-block hover:bg-[#0a2240]/90 transition-colors"
              >
                RICHIEDI INFORMAZIONI
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cessione Crediti"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a2240] py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-6">PRONTI A RECUPERARE I VOSTRI CREDITI?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contattaci oggi stesso per una consulenza gratuita e scopri come possiamo aiutarti a recuperare i tuoi
            crediti in Italia e all'estero.
          </p>
          <Link
            href="/contatti"
            className="bg-[#ffc107] text-[#0a2240] px-8 py-4 font-bold inline-block hover:bg-[#e5ac00] transition-colors"
          >
            CONTATTACI ORA
          </Link>
        </div>
      </section>
    </main>
  )
}

