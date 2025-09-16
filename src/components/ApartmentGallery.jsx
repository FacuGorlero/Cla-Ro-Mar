import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ApartmentGallery = ({ apartment, onBack }) => {
  if (!apartment) return null;

  return (
    <section id="galeria-departamento" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          {apartment.name}
        </motion.h2>

        {/* Carrusel con Swiper */}
        <div className="relative w-full max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-[400px]"
          >
            {apartment.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`${apartment.name} ${idx + 1}`}
                  className="w-full h-[400px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto">
          {apartment.description}
        </p>

        <div className="text-center mt-8">
          <Button onClick={onBack} className="bg-primary hover:bg-primary/90">
            Volver a Departamentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApartmentGallery;
