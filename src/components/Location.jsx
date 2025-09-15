
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Bus, Coffee } from 'lucide-react';

const Location = () => {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.2251881252107!2d-56.98904128547286!3d-37.283681175270885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b5e1ffac62295%3A0x27fe2010681c7646!2sCLA-RO-MAR!5e1!3m2!1ses-419!2sar!4v1747369497814!5m2!1ses-419!2sar";

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestra <span className="text-primary">Ubicación</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ubicados en una zona privilegiada de Villa Gesell, en CLA-RO-MAR, a pocos pasos de la playa y cerca de todos los servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-muted p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Dirección
              </h3>
              <p className="text-muted-foreground mb-6">
                CLA-RO-MAR<br />
                Villa Gesell, Provincia de Buenos Aires, Argentina
              </p>

              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Distancias
              </h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">
                    <MapPin className="h-3 w-3" />
                  </span>
                  <span>A pocos metros de la playa</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">
                    <Coffee className="h-3 w-3" />
                  </span>
                  <span>Cerca de comercios y restaurantes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">
                    <Bus className="h-3 w-3" />
                  </span>
                  <span>Fácil acceso a transporte público</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Coffee className="h-5 w-5 text-primary mr-2" />
                Servicios Cercanos
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Supermercados y proveedurías</li>
                <li>Restaurantes y bares</li>
                <li>Actividades recreativas</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px] sm:h-[450px] md:h-[500px]"
          >
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Google Maps - Departamentos Villa Gesell CLA-RO-MAR"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
