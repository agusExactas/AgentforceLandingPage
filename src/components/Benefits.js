import React from 'react';
import '../styles/benefits.css';

function Benefits() {
  const benefits = [
    {
      number: '10x',
      title: 'Multiplicar Productividad',
      description: 'Automatiza tareas que consumían horas en minutos. Tus agentes trabajarán sin parar, sin cansancio, sin errores.'
    },
    {
      number: '90%',
      title: 'Reducir Tareas Manuales',
      description: 'Elimina el trabajo repetitivo que satura a tu equipo. Permíteles enfocarse en estrategia y relaciones clave.'
    },
    {
      number: '∞',
      title: 'Escalabilidad Sin Límites',
      description: 'Crece tu negocio sin necesidad de contratar más personal. Los agentes escalan contigo automáticamente.'
    },
    {
      number: '⭐',
      title: 'Experiencia Mejorada',
      description: 'Tus clientes recibirán respuestas inmediatas 24/7. Satisfacción y retención garantizadas.'
    }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <h2>Por Qué Este Curso Es Tu Inversión Más Importante en 2025</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-number">{benefit.number}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="benefits-closing">
          <p>
            Este no es un curso ordinario. Es tu hoja de ruta hacia la maestría en IA aplicada a Salesforce.
            Quienes dominen Agentforce en 2025 serán los líderes del sector en 2026.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
