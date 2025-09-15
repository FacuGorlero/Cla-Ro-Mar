
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false); // Close mobile menu if open
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const navLinks = [
    { name: 'Inicio', href: '#inicio', sectionId: 'inicio' },
    { name: 'Departamentos', href: '#departamentos', sectionId: 'departamentos' },
    { name: 'Galería', href: '#galeria', sectionId: 'galeria' },
    { name: 'Ubicación', href: '#ubicacion', sectionId: 'ubicacion' },
    { name: 'Contacto', href: '#contacto', sectionId: 'contacto' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#" onClick={() => scrollToSection('inicio')} className="flex items-center">
              <span className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white text-shadow'}`}>
                Villa Gesell
              </span>
              <span className={`ml-2 text-xl md:text-2xl font-light ${isScrolled ? 'text-secondary' : 'text-white text-shadow'}`}>
                Departamentos
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.sectionId); }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-foreground' : 'text-white text-shadow'}`}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:block"
          >
            <Button 
              className="bg-secondary hover:bg-secondary/80 text-black font-medium"
              onClick={() => scrollToSection('contacto')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Reservar Ahora
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className={isScrolled ? 'text-foreground' : 'text-white'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-base font-medium text-foreground hover:text-secondary"
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.sectionId); }}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full mt-4 bg-secondary hover:bg-secondary/80 text-black font-medium"
                onClick={() => scrollToSection('contacto')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Reservar Ahora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
