
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const ContactForm = ({ predefinedMessage }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    dates: '',
    guests: ''
  });

  useEffect(() => {
    if (predefinedMessage) {
      setFormData(prev => ({
        ...prev,
        message: predefinedMessage
      }));
    }
  }, [predefinedMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData);

    toast({
      title: "Consulta enviada",
      description: "Hemos recibido tu mensaje. Te contactaremos a la brevedad.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      dates: '',
      guests: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
            Teléfono <span className="text-xs text-muted-foreground">(opcional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
            placeholder="+54 9 11 1234-5678"
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-1">
            Cantidad de personas
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 bg-background"
          >
            <option value="">Seleccionar</option>
            <option value="1-2">1-2 personas</option>
            <option value="3-4">3-4 personas</option>
            <option value="5-6">5-6 personas</option>
            <option value="7+">7 o más personas</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="dates" className="block text-sm font-medium text-foreground mb-1">
          Fechas aproximadas <span className="text-xs text-muted-foreground">(opcional)</span>
        </label>
        <input
          type="text"
          id="dates"
          name="dates"
          value={formData.dates}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
          placeholder="Ej: 15/01/2026 al 30/01/2026"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
          placeholder="Escribe tu consulta aquí..."
        ></textarea>
      </div>
      
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-transform duration-200 active:scale-95">
        <Send className="mr-2 h-5 w-5" />
        Enviar Consulta
      </Button>
    </form>
  );
};

export default ContactForm;
