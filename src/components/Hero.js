import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          Transforma Tu CRM Salesforce Con Agentes de IA Inteligentes
        </h2>
        <p className="hero-subtitle">
          Automatiza procesos complejos, elimina tareas manuales y aumenta la productividad de tu equipo
          con Agentforce. El futuro de la gestión empresarial está aquí.
        </p>
        <div className="hero-highlights">
          <span className="highlight">⚡ Automatización Completa</span>
          <span className="highlight">🎯 Resultados Inmediatos</span>
          <span className="highlight">📈 ROI Garantizado</span>
        </div>
        <a href="#cta" className="cta-button">
          Comenzar Ahora - Acceso Exclusivo
        </a>
        <p className="hero-subtitle-small">
          Únete a cientos de profesionales que ya revolucionaron su flujo de trabajo
        </p>
      </div>
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>
    </section>
  );
}

export default Hero;
