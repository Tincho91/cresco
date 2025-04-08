import {
  Users,
  Briefcase,
  Shield,
  Building,
  FileText,
} from "lucide-react"

const Servizi = () => {
  return (
    <section id="servizi" className="py-16 px-4 md:px-8 bg-white scroll-mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">ATTIVITÀ E SERVIZI OFFERTI</h2>
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
  )
}

export default Servizi