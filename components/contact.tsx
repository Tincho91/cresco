import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import ContactForm from "@/components/contact-form"

const Contact = () => {
  return (
    <section id="contatti" className="py-16 px-4 md:px-8 bg-white scroll-mt-16">
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
  )
}

export default Contact