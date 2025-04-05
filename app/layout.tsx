// app/layout.tsx
"use client";

import { useState } from "react";
import { Inter } from 'next/font/google';
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu } from 'lucide-react';
import Footer from "@/components/footer";
import MobileMenu from "@/components/ui/mobile-menu";

const inter = Inter({ subsets: ["latin"] });

// Movemos la metadata a un archivo separado para poder usar "use client"
// Crea un archivo metadata.ts en la carpeta app con este contenido:
// export const metadata = {
//   title: "Cresco Risk Management - Gestione dei crediti anomali",
//   description: "Cresco Risk Management opera nel settore della gestione dei crediti anomali, perseguendo l'obiettivo della riduzione dei costi di recupero dei crediti problematici.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <html lang="it">
      <body className={inter.className}>
        {/* Top bar with contact info */}
        <div className="bg-[#1e2124] text-white py-2 px-4 flex justify-between md:justify-start md:gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#084CA1]" />
            <span>+39 340 4931607</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#084CA1]" />
            <span>crescosrls@gmail.com</span>
          </div>
        </div>

        {/* Navigation */}
        <header className="bg-white py-4 px-4 md:px-8 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/placeholder.svg?height=60&width=60" 
                  alt="Cresco Logo" 
                  width={60} 
                  height={60}
                  className="mr-2"
                />
                <div className="flex flex-col">
                  <span className="text-[#084CA1] text-2xl font-bold">CRESCO</span>
                  <span className="text-[#084CA1] text-xs">RISK MANAGEMENT</span>
                </div>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">HOME</a>
              <a href="#chi-siamo" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">CHI SIAMO</a>
              <a href="#processi" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">PROCESSI</a>
              <a href="#filosofia" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">FILOSOFIA</a>
              <a href="#servizi" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">SERVIZI</a>
              <a href="#contatti" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">CONTATTI</a>
            </nav>
            
            <button 
              className="md:hidden p-2" 
              onClick={openMobileMenu}
              aria-label="Apri menu"
            >
              <Menu className="h-6 w-6 text-[#084CA1]" />
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}



import './globals.css'