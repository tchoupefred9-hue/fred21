import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karl Bryan Tchoupe - Portfolio",
  description: "Portfolio professionnel de Karl Bryan Tchoupe Pembe - Développeur Full Stack",
  keywords: ["portfolio", "développeur", "fullstack", "next.js", "react"],
  authors: [{ name: "Karl Bryan Tchoupe Pembe" }],
  openGraph: {
    title: "Karl Bryan Tchoupe - Portfolio",
    description: "Portfolio professionnel - Développeur Full Stack",
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
