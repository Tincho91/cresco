import Image from "next/image"

const ChiSiamo = () => {
  return (
    <section id="chi-siamo" className="py-16 px-4 md:px-8 bg-white scroll-mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">CHI SIAMO</h2>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg">
                Cresco Risk Management opera nel settore della gestione dei crediti anomali, perseguendo l'obiettivo
                della riduzione dei costi di recupero dei crediti problematici attraverso, modelli preventivi di ricerca
                di spontaneo adempimento.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-[#084CA1] text-xl font-bold mb-4">STRUTTURA OPERATIVA</h3>
                <p className="text-gray-700 mb-4">
                  La struttura operativa ha sede in Rende e si avvale di diversi professionisti dislocati sull'intero
                  territorio nazionale, suddivisi per Foro di Competenza. I professionisti esterni di cui si avvale la
                  Cresco Risk Management, sono rappresentati da avvocati e consulenti aziendali di alto profilo, con
                  forti conoscenze sul territorio e competenze accademiche specialistiche in campo giuridico, economico,
                  fiscale e finanziario.
                </p>
                <p className="text-gray-700">
                  I nostri professionisti, inoltre, sono stati selezionati per le dotate capacità negoziali e
                  l'esperienza decennale maturata nel recupero del credito per conto di Enti pubblici e privati e per le
                  peculiari conoscenze nell'ambito dei procedimenti esecutivi mobiliari/immobiliari e nelle procedure
                  concorsuali.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/chiSiamo.jpeg"
                alt="Chi Siamo"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default ChiSiamo