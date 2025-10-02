
import React from 'react';
import { Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  return (
    
    <div className="bg-primary text-white p-10 rounded-xl shadow-lg mb-8 min-h-[400px] flex flex-col justify-center">
      <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-6 w-6 mr-4 mt-1" />
          <div>
            <p className="font-medium">Teléfono</p>
            <p className="text-white/80">+54 9 11 3174-7845</p>
            <p className="text-white/80">022 55 465489</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-6 w-6 mr-4 mt-1" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-white/80">claromar.vg@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Calendar className="h-6 w-6 mr-4 mt-1" />
          <div>
            <p className="font-medium">Horario de atención</p>
            <p className="text-white/80">Lunes a Viernes: 10:00 - 20:00</p>
            <p className="text-white/80">Sábados y Domingos: 11:00 - 19:00</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MessageSquare className="h-6 w-6 mr-4 mt-1" />
          <div>
            <p className="font-medium">WhatsApp</p>
            <p className="text-white/80">+54 9 11 3174-7845</p>
            <p className="text-white/80">Respuesta inmediata</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
