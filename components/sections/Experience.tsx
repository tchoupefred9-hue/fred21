"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Developpeur Full Stack",
    company: "Startup Tech",
    period: "2023 - Present",
    description: "Developpement d'applications web avec React et Node.js",
  },
  {
    title: "Developpeur Frontend",
    company: "Agence Web",
    period: "2022 - 2023",
    description: "Creation d'interfaces utilisateur avec React et Tailwind CSS",
  },
  {
    title: "Developpeur Junior",
    company: "Freelance",
    period: "2021 - 2022",
    description: "Developpement de sites web statiques et dynamiques",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Mon <span className="text-primary">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-dark p-8 rounded-lg border-l-4 border-primary hover:border-primary-light transition-all"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-sm text-primary mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}