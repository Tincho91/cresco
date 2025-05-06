import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { FadeIn } from "./ui/fadeIn";
import VCardQR from "./ui/vCard";

const Contact = () => {
  return (
    <section
      id="contatti"
      className="py-16 px-4 md:px-8 bg-white scroll-mt-16"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Cresco Risk Management S.R.L.S." />
      <meta itemProp="url" content="https://crescorisk.com" />

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <FadeIn direction="up" delay={0}>
            <h2 className="text-[#084CA1] text-3xl md:text-5xl font-bold mb-4">
              CONTATTI
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="h-1 w-24 bg-[#084CA1] mx-auto" />
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-[#084CA1] text-xl font-bold mb-6">INVIACI UN MESSAGGIO</h3>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#084CA1] text-xl font-bold mb-6">INFORMAZIONI DI CONTATTO</h3>

            <div className="bg-gray-100 p-6 rounded-lg mb-8" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <div className="flex items-start mb-4">
                <MapPin className="text-[#084CA1] w-5 h-5 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-[#084CA1] mb-1">Sede Legale</h4>
                  <p className="text-gray-700">
                    <span itemProp="streetAddress">Contrada Macchialonga, 21</span><br />
                    <span itemProp="postalCode">87036</span>{" "}
                    <span itemProp="addressLocality">Rende</span> (<span itemProp="addressRegion">CS</span>)<br />
                    <span itemProp="addressCountry">IT</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <Phone className="text-[#084CA1] w-5 h-5 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-[#084CA1] mb-1">Telefono</h4>
                  <p className="text-gray-700" itemProp="telephone">+39 340 4931607</p>
                  <p className="text-gray-700" itemProp="telephone">+39 328 7833398</p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <Mail className="text-[#084CA1] w-5 h-5 mt-1 mr-3" />
                <div>
                  <h4 className="font-bold text-[#084CA1] mb-1">Email</h4>
                  <p className="text-gray-700">
                    <a href="mailto:crescosrls@gmail.com" itemProp="email">crescosrls@gmail.com</a>
                  </p>
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

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-[#084CA1] mb-2">Dati Aziendali</h4>
              <p className="text-gray-700" itemProp="taxID">P.I. - C.F. R.I. CCIAA di CS 03866940780</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <VCardQR />
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cresco Risk Management S.R.L.S.",
            "url": "https://crescorisk.com",
            "email": "crescosrls@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Contrada Macchialonga, 21",
              "addressLocality": "Rende",
              "addressRegion": "CS",
              "postalCode": "87036",
              "addressCountry": "IT"
            },
            "telephone": ["+39 340 4931607", "+39 328 7833398"],
            "taxID": "03866940780"
          })
        }}
      />
    </section>
  );
};

export default Contact;