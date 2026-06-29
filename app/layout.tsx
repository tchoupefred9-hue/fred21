import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tchoupe pembe Karl Bryan - Portfolio",
  description: "Portfolio professionnel de Tchoupe pembe Karl Bryan - technicien informatique ",
  keywords: ["portfolio", "développeur", "fullstack", "next.js", "react"],
  authors: [{ name: "Karl Bryan Tchoupe Pembe" }],
  openGraph: {
    title: "Tchoupe pembe Karl Bryan - Portfolio",
    description: "Portfolio professionnel - technicien informatique",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-dark text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
