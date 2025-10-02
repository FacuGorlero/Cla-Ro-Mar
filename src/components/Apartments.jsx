
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Bed, Bath, Maximize, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const apartmentsData = [
  {
    id: 1,
    name: 'Esquina 135 y Av 2',
    description: 'Amplio departamento para 6 personas a pocas cuadras de la playa.',
    capacity: '6 personas',
    bedrooms: '2 dormitorios',
    bathrooms: '1 baño',
    size: 'Cochera cubierta',
    price: 'Solicita tu tarifa',
    priceDetail: 'por noche en temporada alta',
    images: [
      "images/apartments1/1.jpg",
      "images/apartments1/2.jpg",
      "images/apartments1/3.jpg",
     " images/apartments1/4.jpg",
      "images/apartments1/5.jpg",
      "images/apartments1/6.jpg",
      { type: "video", src: "images/apartments1/7.mp4" },
  { type: "video", src: "images/apartments1/8.mp4" },

    ]
  },
  {
    id: 2,
    name: 'Calle 137 entre Av 5 y 6',
    description: 'Amplio chalet para 8 personas con jardin.',
    capacity: '8 personas',
    bedrooms: '2 dormitorios',
    bathrooms: '1 baño',
    size: 'Cochera descubierta',
    price: 'Solicita tu tarifa',
    priceDetail: 'por noche en temporada alta',
    images: [
      "images/apartment 2/1.jpg",
      "images/apartment 2/2.jpg",
      "images/apartment 2/3.jpg",
      "images/apartment 2/4.jpg",
      "images/apartment 2/5.jpg",
      "images/apartment 2/6.jpg",
      "images/apartment 2/7.jpg",
      "images/apartment 2/8.jpg",
      "images/apartment 2/9.jpg",
      "images/apartment 2/10.jpg",
      "images/apartment 2/11.jpg",
      "images/apartment 2/12.jpg",
      "images/apartment 2/13.jpg",
    ]
  },
  {
    id: 3,
    name: 'Esquina 138 y Av 2',
    description: 'Amplio departamento para 6 personas a pocas cuadras de la playa.',
    capacity: '6 personas',
    bedrooms: '1 y 1/2 dormitorios',
    bathrooms: '1 baño',
    size: 'Cochera cubierta',
    price: 'Solicita tu tarifa',
    priceDetail: 'por noche en temporada alta',
    images: [
      "images/apartment 3/1.jpg",
      "images/apartment 3/2.jpg",
      "images/apartment 3/3.jpg",
      "images/apartment 3/4.jpg",
      "images/apartment 3/5.jpg",
      "images/apartment 3/6.jpg",
      "images/apartment 3/7.jpg",
      "images/apartment 3/8.jpg",
      "images/apartment 3/9.jpg",
      "images/apartment 3/10.jpg",
      "images/apartment 3/11.jpg",
      "images/apartment 3/12.jpg",
      "images/apartment 3/13.jpg",
      "images/apartment 3/14.jpg",
      "images/apartment 3/15.jpg",
      "images/apartment 3/16.jpg",
      "images/apartment 3/17.jpg",
      "images/apartment 3/18.jpg",
      "images/apartment 3/19.jpg",
      "images/apartment 3/20.jpg",
      "images/apartment 3/21.jpg",
      "images/apartment 3/22.jpg",
      "images/apartment 3/23.jpg",
      "images/apartment 3/24.jpg",
      "images/apartment 3/25.jpg",
      "images/apartment 3/26.jpg",
      "images/apartment 3/27.jpg",
      "images/apartment 3/28.jpg",
    ]
  }
];


const ApartmentCard = ({ apartment, onInquiryClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Carrusel de imágenes */}
      <div className="relative h-64 overflow-hidden">
       <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={10}
  slidesPerView={1}
  loop
  autoplay={{ delay: 3000 }}
  navigation
  className="h-full"
>
  {apartment.images.map((item, i) => (
    <SwiperSlide key={i}>
      <div
        onClick={() => onInquiryClick(apartment)}
        className="cursor-pointer h-full w-full overflow-hidden"
      >
        {typeof item === "string" ? (
          <img
            src={item}
            alt={`${apartment.name} ${i + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        ) : item.type === "video" ? (
          <video
            src={item.src}
            controls
            className="w-full h-full object-cover rounded-lg"
          />
        ) : null}
      </div>
    </SwiperSlide>
  ))}
</Swiper>



        {/* Precio flotante */}
        <div className="absolute top-4 right-4 bg-secondary text-black font-semibold py-1 px-3 rounded-full">
          {apartment.price}
        </div>
      </div>

      {/* Info del departamento */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{apartment.name}</h3>
        <p className="text-muted-foreground mb-4 text-sm flex-grow">
          {apartment.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-primary mr-2" />
            <span>{apartment.capacity}</span>
          </div>
          <div className="flex items-center">
            <Bed className="h-4 w-4 text-primary mr-2" />
            <span>{apartment.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 text-primary mr-2" />
            <span>{apartment.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Maximize className="h-4 w-4 text-primary mr-2" />
            <span>{apartment.size}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-lg font-bold text-primary">{apartment.price}</p>
            <p className="text-xs text-muted-foreground">{apartment.priceDetail}</p>
          </div>
          <Button
            onClick={() => onInquiryClick(apartment)}
            className="bg-primary hover:bg-primary/90"
            size="sm"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Consultar
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Apartments = ({ onInquiry }) => {
  return (
    <section id="departamentos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Departamentos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos diferentes opciones para que elijas la que mejor se adapte a tus necesidades. Todos nuestros departamentos están completamente equipados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartmentsData.map((apartment, index) => (
            <ApartmentCard 
              key={apartment.id} 
              apartment={apartment} 
              onInquiryClick={onInquiry} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;
