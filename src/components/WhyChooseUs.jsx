
import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    "Más de 15 años de experiencia en alquileres temporarios",
    "Departamentos totalmente equipados y renovados",
    "Excelente ubicación a pasos de la playa",
    "Atención personalizada durante toda tu estadía"
  ];

  return (
    <div className="bg-secondary/20 p-8 rounded-xl">
      <h3 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h3>
      <ul className="space-y-3">
        {reasons.map((reason, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-secondary text-black rounded-full p-1 mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
