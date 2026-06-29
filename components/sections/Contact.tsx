"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Me <span className="text-primary">Contacter</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.a
              href="mailto:dollarbrayan8@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all text-center group"
            >
              <Mail size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-gray-400">dollarbrayan8@gmail.com</p>
            </motion.a>
            <motion.a
              href="tel:+237692860695"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all text-center group"
            >
              <Phone size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-primary mb-2">Telephone</h3>
              <p className="text-gray-400">+237 692 860 695</p>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all text-center group"
            >
              <MapPin size={32} className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-primary mb-2">Localisation</h3>
              <p className="text-gray-400">Douala, Cameroun</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}