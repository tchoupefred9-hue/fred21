"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"] },
  { category: "Outils", items: ["Git", "Docker", "Vercel", "GitHub", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Mes <span className="text-primary">Competences</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-dark-secondary p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}