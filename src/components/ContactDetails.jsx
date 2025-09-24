
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
  className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
>
  <div className="h-full">
    <ContactInfo />
  </div>
  <div className="h-full">
    <WhyChooseUs />
  </div>
</motion.div>
  );
};

export default ContactDetails;
