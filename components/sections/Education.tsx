"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "Universite de Douala",
    degree: "Licence en Informatique",
    year: "2020 - 2023",
    description: "Formation en informatique et sciences des donnees",
  },
  {
    school: "Lycee Technique",
    degree: "Baccalaureat Technique",
    year: "2017 - 2020",
    description: "Specialisation en informatique et programmation",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Mon <span className="text-primary">Education</span>
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-dark p-8 rounded-lg border-l-4 border-primary-light hover:border-primary transition-all"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.school}</p>
                <p className="text-sm text-primary-light mb-4">{edu.year}</p>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}