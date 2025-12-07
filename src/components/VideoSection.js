import React from 'react';
import '../styles/video-section.css';

function VideoSection() {
  return (
    <section id="video" className="video-section">
      <div className="video-container">
        <h2>La Mejor Oportunidad en el Mercado para Aprender Agentforce</h2>
        <p className="video-subtitle">
          En este video te explico qué verás en el curso y qué lo hace distinto al aprendizaje a los golpes
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
            <h3>✓ Aprende de Forma Estructurada</h3>
            <p>Descubre por qué este curso es la mejor oportunidad para dominar Agentforce y cómo difiere del aprendizaje improvisado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
