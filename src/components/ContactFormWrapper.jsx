
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

const ContactFormWrapper = ({ predefinedMessage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="bg-card p-8 rounded-xl shadow-xl border border-border"
    >
      <h3 className="text-2xl font-bold mb-6 text-foreground">Envíanos un mensaje</h3>
      <ContactForm predefinedMessage={predefinedMessage} />
    </motion.div>
  );
};

export default ContactFormWrapper;
