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
            <div className="video-iframe-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/BoZxUa-mlJ4"
                title="Agentforce"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="video-highlight">
            <h3>✓ Aprende de Forma Estructurada</h3>
            <p>
              Descubre por qué este curso es la mejor oportunidad para dominar Agentforce
              y cómo difiere del aprendizaje improvisado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default VideoSection;
