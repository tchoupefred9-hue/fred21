"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t border-primary/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:dollarbrayan8@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition"
              >
                <Mail size={20} />
                <span>dollarbrayan8@gmail.com</span>
              </a>
              <a
                href="tel:+237692860695"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition"
              >
                <Phone size={20} />
                <span>+237 692 860 695</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={20} />
                <span>Douala, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary transition"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Réseaux</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-primary transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-primary transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-primary transition"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/10 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Karl Bryan Tchoupe Pembe. Tous droits réservés.
          </p>
          <p className="text-sm mt-2">
            Développé avec ❤️ par Karl Bryan Tchoupe Pembe
          </p>
        </div>
      </div>
    </footer>
  );
}
