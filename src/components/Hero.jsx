import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen">
      {/* Fondo con imagen y gradiente */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: 'url("/images/FONDO/1000137721.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-4"
          >
            <MapPin className="h-5 w-5 text-secondary mr-2" />
            <span className="text-white text-shadow">Villa Gesell, Buenos Aires, Argentina</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white text-shadow mb-4"
          >
            Departamentos <br />
            <span className="text-secondary">en Villa Gesell</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-white text-shadow mb-8 max-w-2xl"
          >
            Disfruta de unas vacaciones inolvidables a pocas cuadras del mar. Departamentos completamente equipados con excelente ubicación.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-medium"
              onClick={() => scrollToSection('departamentos')}
            >
              Ver Departamentos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30"
              onClick={() => scrollToSection('contacto')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Consultar Disponibilidad
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Info adicional abajo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="py-4 px-6 rounded-full flex items-center gap-6 bg-black/20 backdrop-blur-lg">
          <div className="text-center">
            <p className="text-white font-medium">A 200m</p>
            <p className="text-white/80 text-sm">de la playa</p>
          </div>
          <div className="h-10 w-px bg-white/30"></div>
          <div className="text-center">
            <p className="text-white font-medium">Zona Norte</p>
            <p className="text-white/80 text-sm">ubicación tranquila</p>
          </div>
          <div className="h-10 w-px bg-white/30"></div>
          <div className="text-center">
            <p className="text-white font-medium">Totalmente</p>
            <p className="text-white/80 text-sm">equipados</p>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
