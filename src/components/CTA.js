import React, { useState } from 'react';
import '../styles/cta.css';

function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes integrar con tu backend o servicio de email
    alert(`¡Gracias ${formData.name}! Te contactaremos pronto en ${formData.email}`);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section id="cta" className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Es Hora de Transformar Tu Futuro</h2>
          <p>
            Los agentes de IA no son el futuro. Son el presente. Y quienes los dominen 
            hoy serán los tomadores de decisiones de mañana. ¿Serás tú uno de ellos?
          </p>
          <div className="cta-features">
            <span>✓ Acceso de por vida al contenido</span>
            <span>✓ Comunidad exclusiva de estudiantes</span>
            <span>✓ Actualizaciones continuas</span>
            <span>✓ Soporte dedicado</span>
          </div>
        </div>
        
        <form className="cta-form" onSubmit={handleSubmit}>
          <h3>Comienza Tu Transformación Ahora</h3>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Tu teléfono (opcional)"
            value={formData.phone}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            Quiero Acceso Ahora 🚀
          </button>
          <p className="form-disclaimer">
            Te contactaremos dentro de 24 horas con toda la información.
          </p>
        </form>
      </div>
    </section>
  );
}

export default CTA;
