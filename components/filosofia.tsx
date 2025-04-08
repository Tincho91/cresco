import Image from "next/image"
import { FadeIn } from "./ui/fadeIn"

const Filosofia = () => {
  return (
    <section id="filosofia" className="py-16 px-4 md:px-8 bg-white scroll-mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <FadeIn direction="up" delay={0}>
                <h2 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">
                  FILOSOFIA E MODO DI OPERARE, MISSION
                </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/filosofia.jpeg"
                alt="Filosofia e Mission"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Crediamo in una gestione del credito differente, basata su un reinverthing del credito, con tecnologie
                all'avanguardia e persone qualificate, monitorando sempre in tempo reale i risultati. Etica, rispetto,
                onestà e fiducia sono i valori che ci permettono di essere partner affidabili al fianco delle imprese,
                tutelando le loro scelte commerciali.
              </p>
              <p className="text-gray-700 mb-4">
                Cambiamo il modo di concepire la gestione del credito. Mantenere l'equilibrio tra gli attori del sistema
                è il nostro obiettivo principale, per il quale ci impegniamo al rispetto e ad una comunicazione chiara
                da entrambe le parti. Vogliamo farvi sentire a vostro agio nel delegare a terzi la gestione del recupero
                del credito, garantendo che il vostro debitore sarà nelle condizioni di adempiere al suo debito senza
                sentirsi aggredito.
              </p>
              <p className="text-gray-700 mb-4">
                Vinciamo assieme non soltanto con l'incasso ma tutelando la relazione, lasciandovi sempre aperta la
                possibilità di continuare il rapporto commerciale con i vostri clienti.
              </p>
              <p className="text-gray-700">
                La filosofia con cui opera la Cresco Risk Management srl è rappresentata dalla consapevolezza che
                l'attività di recupero del credito è, sostanzialmente, un atto di comunicazione, un atto negoziale, per
                arrivare alla definizione del pagamento, senza adire le procedure legali. È quindi un'abilità di
                linguaggio volto alla coltivazione di un dialogo con il debitore sulle opportunità di un adempimento
                spontaneo rispetto ai rischi connessi all'avvio di procedure coattive a suo carico.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Filosofia