
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Departamentos Villa Gesell</h3>
            <p className="text-white/80 mb-4">
              Ofrecemos departamentos de calidad para que disfrutes de unas vacaciones inolvidables en Villa Gesell.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-secondary transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#departamentos" className="text-white/80 hover:text-secondary transition-colors">Departamentos</a>
              </li>
              <li>
                <a href="#galeria" className="text-white/80 hover:text-secondary transition-colors">Galería</a>
              </li>
              <li>
                <a href="#ubicacion" className="text-white/80 hover:text-secondary transition-colors">Ubicación</a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-secondary transition-colors">Contacto</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5" />
                <span className="text-white/80">info@departamentosvillagesell.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5" />
                <span className="text-white/80">+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">Avenida Buenos Aires 1234, Villa Gesell, Buenos Aires, Argentina</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-white/80">Lunes - Viernes:</span>
                <span className="text-white">9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Sábados:</span>
                <span className="text-white">10:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Domingos:</span>
                <span className="text-white">Cerrado</span>
              </li>
            </ul>
            <p className="mt-4 text-white/80">
              *Durante temporada alta atendemos todos los días.
            </p>
          </motion.div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Departamentos Villa Gesell. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
