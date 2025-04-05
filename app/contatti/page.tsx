import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contatti() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section for Contact */}
      <section className="relative h-[300px]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">CONTATTI</h1>
            <p className="text-white text-xl">Siamo qui per aiutarti</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-[#0a2240] text-2xl font-bold mb-6">INVIACI UN MESSAGGIO</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">
                      Azienda *
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Oggetto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc107]"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="privacy" className="mt-1 mr-2" required />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    Ho letto e accetto la{" "}
                    <a href="#" className="text-[#0a2240] underline">
                      Privacy Policy
                    </a>{" "}
                    *
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#ffc107] text-[#0a2240] px-6 py-3 font-bold hover:bg-[#e5ac00] transition-colors"
                >
                  INVIA MESSAGGIO
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-[#0a2240] text-2xl font-bold mb-6">INFORMAZIONI DI CONTATTO</h2>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <MapPin className="text-[#ffc107] w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h3 className="font-bold text-[#0a2240] mb-1">Sede Legale</h3>
                    <p className="text-gray-700">
                      Via Example, 123
                      <br />
                      20100 Milano (MI)
                      <br />
                      Italia
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <Phone className="text-[#ffc107] w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h3 className="font-bold text-[#0a2240] mb-1">Telefono</h3>
                    <p className="text-gray-700">+39 02 7600 4029</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-[#ffc107] w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h3 className="font-bold text-[#0a2240] mb-1">Email</h3>
                    <p className="text-gray-700">info@invenium.it</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=600" alt="Mappa" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

