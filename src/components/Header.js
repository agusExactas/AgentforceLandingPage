import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🚀 AGENTFORCE</h1>
        </div>
        <nav className="nav">
          <a href="#features">Características</a>
          <a href="#benefits">Beneficios</a>
          <a href="#video">Video</a>
          <a href="#faq">Preguntas</a>
        </nav>
        <a href="#cta" className="nav-cta">Inscribirse Ahora</a>
      </div>
    </header>
  );
}

export default Header;
