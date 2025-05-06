import { Inter } from 'next/font/google';
import "./globals.css";
import { Phone, Mail } from 'lucide-react';
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cresco Risk Management - Gestione dei crediti anomali",
  description:
    "Cresco Risk Management opera nel settore della gestione dei crediti anomali, perseguendo l'obiettivo della riduzione dei costi di recupero dei crediti problematici.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <div className="bg-[#1e2124] text-white py-2 px-4 flex justify-between md:justify-start md:gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#084CA1]" />
            <span>+39 340 4931607</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#084CA1]" />
            <span>+39 328 7833398</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#084CA1]" />
            <span>crescosrls@gmail.com</span>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}