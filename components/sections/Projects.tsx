"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Personnel",
    description: "Portfolio moderne avec Next.js, React et Tailwind CSS",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Application E-commerce",
    description: "Plateforme de vente en ligne avec panier et paiement",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord d'analyse de donnees en temps reel",
    tech: ["Next.js", "TypeScript", "Chart.js"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Mes <span className="text-primary">Projets</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-dark-secondary rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-light/10 flex items-center justify-center">
                  <span className="text-gray-400">Apercu du projet</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                  >
                    Voir le projet
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}