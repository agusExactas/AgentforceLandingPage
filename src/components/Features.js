import React from 'react';
import '../styles/features.css';

function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'Domina Agentforce desde Cero',
      description: 'Aprende todo lo que necesitas saber sobre Agentforce, desde conceptos fundamentales hasta implementación avanzada en tu organización.'
    },
    {
      icon: '⚙️',
      title: 'Crea Agentes Personalizados',
      description: 'Construye agentes de IA capaces de realizar tareas específicas en tu CRM. Desde automatización simple hasta flujos complejos y multietapa.'
    },
    {
      icon: '🔌',
      title: 'Integra Actions y Flows',
      description: 'Domina la creación de Apex Actions y Flow Actions para conectar tus agentes con cualquier parte de tu ecosistema Salesforce.'
    },
    {
      icon: '📊',
      title: 'Optimiza con Data Cloud',
      description: 'Utiliza Data Cloud para potenciar tus agentes con información de 360 grados. RAG avanzado para decisiones inteligentes.'
    },
    {
      icon: '💬',
      title: 'Generación de Contenido IA',
      description: 'Crea prompts efectivos con Prompt Builder. Genera contenido automático y mensajes personalizados a escala empresarial.'
    },
    {
      icon: '📈',
      title: 'Aumenta Ventas y Servicio',
      description: 'Implementa SDR agents y Einstein Service Replies para potenciar tu equipo de ventas y soporte automatizando tareas clave.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>Lo que Dominarás en Este Curso</h2>
        <p className="section-subtitle">Habilidades que transformarán tu carrera profesional</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
