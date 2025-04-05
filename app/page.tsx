import Image from "next/image"
import {
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Briefcase,
  Target,
  Shield,
  Building,
  FileText,
  UserCheck,
} from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative h-[500px]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">CRESCO RISK MANAGEMENT</h1>
            <p className="text-white text-xl mb-8">Gestione dei crediti anomali e recupero crediti</p>
            <a
              href="#servizi"
              className="bg-[#084CA1] text-white px-6 py-3 font-bold inline-block hover:bg-[#084CA1]/90 transition-colors"
            >
              SCOPRI I NOSTRI SERVIZI
            </a>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="chi-siamo" className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#084CA1] text-3xl font-bold mb-4">CHI SIAMO</h2>
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
                src="/placeholder.svg?height=500&width=600"
                alt="Chi Siamo"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Processi Operativi Section */}
      <section id="processi" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#084CA1] text-3xl font-bold mb-4">PROCESSI OPERATIVI</h2>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg text-center mb-12">
              I processi operativi che la società mette in campo sono caratterizzati dalla gestione attiva del valore
              recuperabile e dalla focalizzazione dei processi per tipologia di credito, con un forte orientamento alla
              ricerca di soluzioni stragiudiziali con tempistiche celeri.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-[#084CA1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-[#084CA1] font-bold mb-2">Gestione Attiva</h3>
                <p className="text-gray-700">Gestione attiva del valore recuperabile</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-[#084CA1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-[#084CA1] font-bold mb-2">Focalizzazione</h3>
                <p className="text-gray-700">Processi focalizzati per tipologia di credito</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-[#084CA1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-[#084CA1] font-bold mb-2">Soluzioni Stragiudiziali</h3>
                <p className="text-gray-700">Orientamento a soluzioni stragiudiziali rapide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia e Mission Section */}
      <section id="filosofia" className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#084CA1] text-3xl font-bold mb-4">FILOSOFIA E MODO DI OPERARE, MISSION</h2>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
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

      {/* Strategie Section */}
      <section id="strategie" className="py-16 px-4 md:px-8 bg-[#084CA1] text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl font-bold mb-4">STRATEGIE</h2>
            <div className="h-1 w-24 bg-white mx-auto"></div>
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

      {/* Servizi Section */}
      <section id="servizi" className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#084CA1] text-3xl font-bold mb-4">ATTIVITÀ E SERVIZI OFFERTI</h2>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
              La nostra azienda offre i seguenti servizi al fine e per recuperare il credito:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Servizio 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="bg-[#084CA1] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[#084CA1] text-xl font-bold mb-4">RECUPERO CREDITI STRAGIUDIZIALE</h3>
              <p className="text-gray-700">
                Attività di gestione, tutela, sollecito e recupero stragiudiziale di crediti insoluti per conto terzi,
                nei confronti di residenti in Italia e/o all'estero, in qualsiasi modalità di contatto con il debitore.
              </p>
            </div>

            {/* Servizio 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="bg-[#084CA1] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[#084CA1] text-xl font-bold mb-4">RECUPERO CREDITI GIUDIZIALE</h3>
              <p className="text-gray-700">
                Recupero crediti giudiziale, con anche supporto tecnico organizzativo per la gestione del contenzioso.
                La società vanta, altresì, una partnership con rinomata azienda operante nel settore dei call center
                outbound.
              </p>
            </div>

            {/* Servizio 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="bg-[#084CA1] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[#084CA1] text-xl font-bold mb-4">MONITORAGGIO E CONSULENZA</h3>
              <p className="text-gray-700">
                Monitoraggio incasso dei crediti ed anche rimessa, nonché valutazione commerciale dei crediti stessi a
                favore degli enti locali e pubblici uffici. Consulenze personalizzate sulle singole azioni di recupero.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-[#084CA1] text-xl font-bold mb-4">SERVIZI AGGIUNTIVI</h3>
            <ul className="list-disc pl-5 text-gray-700 grid md:grid-cols-2 gap-4">
              <li>Gestione delle procedure concorsuali</li>
              <li>Dichiarazione di deducibilità fiscale</li>
              <li>Accertamenti patrimoniali Asset Investigations</li>
              <li>Rapporti di affidabilità su concessioni linee di credito</li>
              <li>Indagini patrimoniali per azioni esecutive mirate ed efficaci</li>
              <li>Rapporto su aziende concorrenti</li>
              <li>Rintraccio bancario</li>
              <li>Rintraccio professione</li>
              <li>Rintraccio pubblico registro automobilistico</li>
              <li>Verifiche ipocatastali</li>
            </ul>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-[#084CA1] text-xl font-bold mb-4">A CHI CI RIVOLGIAMO</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Building className="h-8 w-8 text-[#084CA1] mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Imprese</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Users className="h-8 w-8 text-[#084CA1] mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Privati</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Shield className="h-8 w-8 text-[#084CA1] mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Assicurazioni</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Building className="h-8 w-8 text-[#084CA1] mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Banche e finanziarie</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Building className="h-8 w-8 text-[#084CA1] mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Retail</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Building className="h-8 w-8 text-[#084CA1] mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Pubblica Amministrazione</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center md:col-span-2">
                <Building className="h-8 w-8 text-[#084CA1] mx-auto mb-2" />
                <p className="text-gray-700 font-medium">Amministratori Condominiali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase Giudiziale Section */}
      <section id="fase-giudiziale" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#084CA1] text-3xl font-bold mb-4">
              IN CASO DI ESITO NEGATIVO DELL'ATTIVITÀ STRAGIUDIZIONALE - FASE GIUDIZIALE
            </h2>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
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

      {/* Contact Section */}
      <section id="contatti" className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#084CA1] text-3xl font-bold mb-4">CONTATTI</h2>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-[#084CA1] text-xl font-bold mb-6">INVIACI UN MESSAGGIO</h3>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-[#084CA1] text-xl font-bold mb-6">INFORMAZIONI DI CONTATTO</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <MapPin className="text-[#084CA1] w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-[#084CA1] mb-1">Sede Legale</h4>
                    <p className="text-gray-700">
                      Contrada Macchialonga, 21
                      <br />
                      87036 Rende (CS)
                      <br />
                      Italia
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <Phone className="text-[#084CA1] w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-[#084CA1] mb-1">Telefono</h4>
                    <p className="text-gray-700">+39 340 4931607</p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <Mail className="text-[#084CA1] w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-[#084CA1] mb-1">Email</h4>
                    <p className="text-gray-700">crescosrls@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-[#084CA1] w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-[#084CA1] mb-1">PEC</h4>
                    <p className="text-gray-700">crescosrls@pec.it</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-bold text-[#084CA1] mb-2">Dati Aziendali</h4>
                <p className="text-gray-700">P.I. - C.F. R.I. CCIAA di CS 03866940780</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

