"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { name: "Certification React - Udemy", year: 2023 },
  { name: "Certification Next.js - Coursera", year: 2023 },
  { name: "Certification TypeScript - Pluralsight", year: 2022 },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Mes <span className="text-primary">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-primary-light/5 p-6 rounded-lg border border-primary/20 flex items-center gap-4 hover:border-primary/50 transition-all"
              >
                <Award size={32} className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">{cert.name}</p>
                  <p className="text-sm text-gray-400">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}