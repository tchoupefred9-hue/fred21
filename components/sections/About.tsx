"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            A propos de <span className="text-primary">moi</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Je suis un développeur Full Stack basé à Douala, Cameroun, avec plusieurs années d'expérience dans la création d'applications web modernes et performantes.
              </p>
              <p>
                J'ai une passion pour l'apprentissage continu et j'adore explorer les nouvelles technologies pour rester à jour avec les tendances du développement web.
              </p>
              <p>
                Mon objectif est de créer des solutions innovantes qui répondent aux besoins des utilisateurs et des entreprises.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-dark p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold text-primary mb-2">Localisation</h3>
                <p className="text-gray-400">Douala, Cameroun</p>
              </div>
              <div className="bg-dark p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <p className="text-gray-400">dollarbrayan8@gmail.com</p>
              </div>
              <div className="bg-dark p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
                <h3 className="text-xl font-bold text-primary mb-2">Telephone</h3>
                <p className="text-gray-400">+237 692 860 695</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}