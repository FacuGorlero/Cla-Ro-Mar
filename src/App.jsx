import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Apartments from '@/components/Apartments';
import ApartmentGallery from '@/components/ApartmentGallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [selectedApartment, setSelectedApartment] = useState(null);

  const handleApartmentInquiry = (apartment) => {
    setSelectedApartment(apartment); // 👈 abre la galería sin mover el scroll
  };

  const handleBackToList = () => {
    setSelectedApartment(null); // 👈 vuelve al listado sin mover el scroll
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Features />
        </motion.div>

        {/* 👇 Si hay un depto seleccionado → mostramos la galería */}
        {selectedApartment ? (
          <ApartmentGallery apartment={selectedApartment} onBack={handleBackToList} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="beach-pattern"
          >
            <Apartments onInquiry={handleApartmentInquiry} />
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Location />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
