"use client";

import { Inter } from 'next/font/google';
import "./globals.css";
import { Phone, Mail } from 'lucide-react';
import Footer from "@/components/footer";

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
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}



import './globals.css'
import Navbar from "@/components/navbar";
