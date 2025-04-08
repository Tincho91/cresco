import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#084CA1] text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/logoFooter.png"
                alt="Cresco Logo"
                width={200}
                height={60}
                className="mr-2"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Cresco Risk Management opera nel settore della gestione dei crediti anomali, perseguendo l'obiettivo della
              riduzione dei costi di recupero dei crediti problematici.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">LINK RAPIDI</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-gray-300 hover:text-white">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#processi" className="text-gray-300 hover:text-white">
                  Processi Operativi
                </a>
              </li>
              <li>
                <a href="#filosofia" className="text-gray-300 hover:text-white">
                  Filosofia e Mission
                </a>
              </li>
              <li>
                <a href="#strategie" className="text-gray-300 hover:text-white">
                  Strategie
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">I NOSTRI SERVIZI</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servizi" className="text-gray-300 hover:text-white">
                  Recupero Crediti Stragiudiziale
                </a>
              </li>
              <li>
                <a href="#servizi" className="text-gray-300 hover:text-white">
                  Recupero Crediti Giudiziale
                </a>
              </li>
              <li>
                <a href="#servizi" className="text-gray-300 hover:text-white">
                  Monitoraggio e Consulenza
                </a>
              </li>
              <li>
                <a href="#fase-giudiziale" className="text-gray-300 hover:text-white">
                  Fase Giudiziale
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">CONTATTI</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-white w-5 h-5 mt-1 mr-3" />
                <span className="text-gray-300">
                  Contrada Macchialonga, 21
                  <br />
                  87036 Rende (CS)
                  <br />
                  Italia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-white w-5 h-5 mr-3" />
                <span className="text-gray-300">+39 340 4931607</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-white w-5 h-5 mr-3" />
                <span className="text-gray-300">crescosrls@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#063a7e] py-4 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Cresco Risk Management. P.I. - C.F. R.I. CCIAA di CS 03866940780. Tutti i
            diritti riservati.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

