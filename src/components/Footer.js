import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Agentforce Academy</h4>
            <p>Transformando profesionales en expertos de IA en Salesforce</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#features">Características</a></li>
              <li><a href="#benefits">Beneficios</a></li>
              <li><a href="#faq">Preguntas</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Agentforce Academy. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ para transformadores digitales como tú</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
