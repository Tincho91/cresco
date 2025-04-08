import { FadeIn } from "./ui/fadeIn"

const Strategia = () => {
  return (
    <section id="strategie" className="py-16 px-4 md:px-8 bg-[#084CA1] text-white scroll-mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <FadeIn direction="up" delay={0}>
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                STRATEGIE
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="h-1 w-24 bg-white mx-auto"></div>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-white mb-8 text-lg text-center">
              I salti nel buio ci spaventano, le cause legali sono spesso costose, lunghe e incerte. Per questo vogliamo
              offrirvi una valutazione di convenienza preventiva e specifica del vostro debitore nel caso in cui sia
              necessario procedere.
            </p>

            <div className="bg-white/10 p-8 rounded-lg mb-8">
              <p className="text-white mb-4">
                Individuare proprietà mobiliari ed immobiliari, fonti di reddito e partecipazioni e ogni altra
                informazione funzionale alla decisione, vi permetterà di avere un quadro dettagliato del soggetto dal
                punto di vista economico, finanziario o patrimoniale tutelandovi da un possibile iter giudiziario e
                dandovi una maggiore sicurezza nel caso in cui il ricorso ad un legale fosse inevitabile.
              </p>
              <p className="text-white">
                Nel caso l'iter fosse già in corso, vi permetterà di individuare i beni aggredibili, indirizzando
                l'azione di pignoramento in modo mirato.
              </p>
            </div>

            <div className="text-center">
              <a
                href="#servizi"
                className="bg-white text-[#084CA1] px-6 py-3 font-bold inline-block hover:bg-gray-100 transition-colors rounded"
              >
                SCOPRI I NOSTRI SERVIZI
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Strategia