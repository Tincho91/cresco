import { Target, FileText, UserCheck } from "lucide-react"

const ProcessiOperativi = () => {
  return (
    <section id="processi" className="py-16 px-4 md:px-8 bg-gray-50 scroll-mt-16">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">PROCESSI OPERATIVI</h2>
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
  )
}

export default ProcessiOperativi