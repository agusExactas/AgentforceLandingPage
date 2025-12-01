import React from 'react';
import '../styles/testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos López',
      role: 'Manager de Ventas - TechCorp',
      text: 'Después de completar este curso, implementé un SDR agent que redujo nuestro tiempo de seguimiento en 80%. Nuestro equipo ahora se enfoca en cerrar deals en lugar de enviar emails.',
      emoji: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'María González',
      role: 'Admin de Salesforce - FinServ',
      text: 'La mejor inversión en formación que hemos hecho. Los agentes que creé ahora manejan 500+ interacciones diarias sin errores. Impresionante.',
      emoji: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Juan Martínez',
      role: 'Customer Success Lead - SaaS',
      text: 'El curso no solo te enseña qué es Agentforce, sino cómo pensaruminio para implementarlo en casos reales. Invaluable para cualquiera que trabaje con Salesforce.',
      emoji: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Directora IT - Enterprise',
      text: 'Los agentes que hemos desplegado generan un ROI de 300% en el primer trimestre. Este curso nos dio la llave maestra.',
      emoji: '⭐⭐⭐⭐⭐'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>Lo Que Dicen Quienes Ya Transformaron Su Negocio</h2>
        <p className="section-subtitle">Resultados reales de profesionales como tú</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">{testimonial.emoji}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
