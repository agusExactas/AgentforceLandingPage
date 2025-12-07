import React, { useState } from 'react';
import '../styles/faq.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '¿Necesito experiencia previa con IA o Salesforce?',
      answer: 'No. El curso comienza desde cero y te lleva paso a paso. Si tienes experiencia con Salesforce, avanzarás más rápido, pero no es requisito. Solo necesitas ganas de aprender.'
    },
    {
      question: '¿Cuánto tiempo me tomará dominar Agentforce?',
      answer: 'Con dedicación de 2-3 horas semanales, serás capaz de crear tus primeros agentes en 2 semanas. Dominio completo: 6-8 semanas.'
    },
    {
      question: '¿Puedo aplicar lo que aprenda en cualquier organización Salesforce?',
      answer: 'Absolutamente. Agentforce funciona en cualquier instancia de Salesforce. Los patrones y técnicas que aprenderás son universales.'
    },
    {
      question: '¿Incluye acceso a una comunidad o soporte?',
      answer: 'Sí. Tendrás acceso a nuestra comunidad de estudiantes, recursos actualizados regularmente y soporte dedicado.'
    },
    {
      question: '¿Se actualizará el curso conforme avance la tecnología?',
      answer: 'Sí. El curso recibe actualizaciones continuas para reflejar los últimos cambios y características de Agentforce. Tu acceso de por vida incluye todas las actualizaciones.'
    },
    {
      question: '¿Recibiré certificación al completar el curso?',
      answer: 'Sí. Al terminar, recibirás un certificado reconocido que avala tu dominio en Agentforce, perfecto para tu LinkedIn.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2>Preguntas Frecuentes</h2>
        <p className="section-subtitle">Resolvemos tus dudas para que tomes la mejor decisión</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
