
import React from 'react';
import { Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-primary text-white p-8 rounded-xl shadow-lg mb-8">
      <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-6 w-6 mr-4 mt-1" />
          <div>
            <p className="font-medium">Teléfono</p>
            <p className="text-white/80">+54 9 11 1234-5678</p>
            <p className="text-white/80">+54 9 11 5678-1234</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-6 w-6 mr-4 mt-1" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-white/80">info@departamentosvillagesell.com</p>
            <p className="text-white/80">reservas@departamentosvillagesell.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Calendar className="h-6 w-6 mr-4 mt-1" />
          <div>
            <p className="font-medium">Horario de atención</p>
            <p className="text-white/80">Lunes a Viernes: 9:00 - 20:00</p>
            <p className="text-white/80">Sábados: 10:00 - 15:00</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MessageSquare className="h-6 w-6 mr-4 mt-1" />
          <div>
            <p className="font-medium">WhatsApp</p>
            <p className="text-white/80">+54 9 11 1234-5678</p>
            <p className="text-white/80">Respuesta inmediata</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
