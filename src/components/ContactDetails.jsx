
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '@/components/ContactInfo';
import WhyChooseUs from '@/components/WhyChooseUs';

const ContactDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <ContactInfo />
      <WhyChooseUs />
    </motion.div>
  );
};

export default ContactDetails;
