import { FadeIn } from "./ui/fadeIn"

const Giudiziale = () => {
  return (
    <section id="fase-giudiziale" className="py-16 px-4 md:px-8 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <FadeIn direction="up" delay={0}>
              <h2 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">
                IN CASO DI ESITO NEGATIVO DELL'ATTIVITÀ STRAGIUDIZIONALE - FASE GIUDIZIALE
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-8">
              A seguito della relazione situazione debitoria ovvero report sull'attività svolta alla valutazione e
              descrizione delle attività giudiziali più opportune in termini di costi e celerità e prospettive di
              recupero. Difatti, è solo attraverso un'analisi peculiare del credito, da un punto di vista soggettivo ed
              oggettivo, ed grazie alla conoscenza concreta dei reali scenari conseguenti al mancato bonario adempimento
              dei debitori, che sarà possibile valutare la migliore strategia di recupero in termini di tempi, costi e
              benefici!
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-[#084CA1] text-xl font-bold mb-4">LA NOSTRA STRATEGIA IN 9 PASSI</h3>
              <p className="text-gray-700 mb-4">
                La strategia messa in campo è volta ad aumentare la redditività attraverso l'attuazione di operazioni
                finalizzate ad accelerare i tempi di incasso mediante un'azione decisiva e tempestiva, l'attività e le
                strategie constano di n. 9 punti/passi di seguito elencati:
              </p>
              <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                <li>Analisi della documentazione in possesso e ascolto delle necessità e delle finalità</li>
                <li>Verifica dei dati e indagine interna di fattibilità</li>
                <li>Rintraccio debitore</li>
                <li>
                  Invio di sollecito di pagamento entro 7 giorni con lettera di diffida a tutti gli indirizzi del
                  debitore, sia PEC che tramite Posta Raccomandata
                </li>
                <li>
                  Tentativi telefonici costanti per sollecitare il pagamento con risoluzione bonaria Phone collection
                </li>
                <li>Visite domiciliari presso tutti gli indirizzi del debitore</li>
                <li>Incontro con il cliente</li>
                <li>Report sull'attività svolta e sulle prospettive di recupero crediti</li>
                <li>Proposta di definizione</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Giudiziale