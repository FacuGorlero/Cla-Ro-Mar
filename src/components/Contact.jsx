
import React from 'react';
import { motion } from 'framer-motion';
import ContactFormWrapper from '@/components/ContactFormWrapper';
import ContactDetails from '@/components/ContactDetails';

const Contact = ({ predefinedMessage }) => {
  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contacta con <span className="text-primary">Nosotros</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto">
            Estamos disponibles para responder todas tus consultas y ayudarte a planificar tus vacaciones perfectas en Villa Gesell.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactFormWrapper predefinedMessage={predefinedMessage} />
          <ContactDetails />
        </div>
      </div>
    </section>
  );
};

export default Contact;
