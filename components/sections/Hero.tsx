"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Bonjour, je suis <span className="text-primary">Karl Bryan</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Developpeur Full Stack passionné par la création de solutions web innovantes et performantes.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
                Voir mes projets
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-all">
                Me contacter
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full h-96 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center rounded-2xl border border-primary/30">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-400">Photo de profil</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}