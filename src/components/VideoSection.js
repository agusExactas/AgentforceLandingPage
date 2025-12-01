import React from 'react';
import '../styles/video-section.css';

function VideoSection() {
  return (
    <section id="video" className="video-section">
      <div className="video-container">
        <h2>Mira Cómo Funciona Agentforce</h2>
        <p className="video-subtitle">
          Descubre en vivo la potencia de los agentes de IA transformando tareas en segundos
        </p>
        <div className="video-wrapper">
          <div className="video-placeholder">
            <video 
              width="100%" 
              height="100%" 
              controls 
              poster="https://via.placeholder.com/1280x720/751EEB/01EB3F?text=Agentforce+Demo"
            >
              <source src="./Videos/Completo/Anuncio 1.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video. Por favor, actualiza tu navegador.
            </video>
          </div>
          <div className="video-highlight">
            <h3>✓ Demostración Práctica Completa</h3>
            <p>Visualiza paso a paso cómo crear, configurar y desplegar un agente de IA en tu CRM Salesforce.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
