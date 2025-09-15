
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryCategories = [
  {
    name: "Playa Cercana",
    cover: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Vista de la playa en Villa Gesell",
    images: [
      { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Playa amplia y soleada" },
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Olas rompiendo en la orilla" },
      { src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Atardecer en la playa" },
    ]
  },
  {
    name: "Sala de Estar",
    cover: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Interior de departamento, sala de estar",
    images: [
      { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Sala de estar confortable con sofá" },
      { src: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Detalle de decoración en sala de estar" },
      { src: "https://images.unsplash.com/photo-1560185007-c5ca91ba2960?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Sala de estar luminosa con TV" },
    ]
  },
  {
    name: "Cocina Equipada",
    cover: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Cocina completamente equipada",
    images: [
      { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Cocina moderna con electrodomésticos" },
      { src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Utensilios de cocina y vajilla" },
      { src: "https://images.unsplash.com/photo-1600585152220-0140abc848d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Espacio de comedor en la cocina" },
    ]
  },
  {
    name: "Dormitorio Principal",
    cover: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Dormitorio principal con cama matrimonial",
    images: [
      { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Cama matrimonial cómoda" },
      { src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Dormitorio con ventana y luz natural" },
      { src: "https://images.unsplash.com/photo-1595526114035-0d45ed164632?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Armario espacioso en dormitorio" },
    ]
  },
  {
    name: "Baño Completo",
    cover: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Baño moderno con ducha",
    images: [
      { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Ducha moderna y limpia" },
      { src: "https://images.unsplash.com/photo-1575877980303-009706389164?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Lavamanos con espejo" },
      { src: "https://images.unsplash.com/photo-1620627714415-cf49a4db2096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Toallas y artículos de aseo" },
    ]
  },
  {
    name: "Balcón",
    cover: "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Balcón con vista al jardín",
    images: [
      { src: "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Vista desde el balcón" },
      { src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Mobiliario de balcón" },
      { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", alt: "Balcón espacioso" },
    ]
  }
];

const GalleryModal = ({ isOpen, onClose, images, initialIndex = 0, categoryName }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex, images]);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card p-4 sm:p-6 rounded-xl shadow-2xl max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{categoryName} - {images[currentIndex].alt}</h3>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="relative aspect-video mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentIndex].src}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full object-contain rounded-lg"
                />
              </AnimatePresence>
              {images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex justify-center mt-3 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ease-in-out ${currentIndex === index ? 'bg-primary scale-125' : 'bg-muted-foreground/50 hover:bg-muted-foreground'}`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const ImageCarousel = ({ category, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = category.images;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-card p-4 sm:p-6 rounded-xl shadow-xl border border-border">
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">{category.name}</h3>
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg group">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex].src}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
            onClick={() => onImageClick(images, currentIndex, category.name)}
          />
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>
      <p className="text-center text-sm text-muted-foreground h-10 flex items-center justify-center">{images[currentIndex].alt}</p>
      {images.length > 1 && (
        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-muted-foreground/50 hover:bg-muted-foreground'}`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);
  const [modalCategoryName, setModalCategoryName] = useState('');

  const handleImageClick = (images, index, categoryName) => {
    setModalImages(images);
    setModalInitialIndex(index);
    setModalCategoryName(categoryName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galería de <span className="text-primary">Imágenes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestros departamentos y las hermosas vistas que podrás disfrutar durante tu estadía en Villa Gesell.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {galleryCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ImageCarousel category={category} onImageClick={handleImageClick} />
            </motion.div>
          ))}
        </div>
      </div>
      <GalleryModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={modalImages}
        initialIndex={modalInitialIndex}
        categoryName={modalCategoryName}
      />
    </section>
  );
};

export default Gallery;
