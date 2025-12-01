# 📸 Cómo Integrar Imágenes de Material

Este documento explica cómo integrar las imágenes que están en la carpeta `material/` en tu landing page.

## 📁 Ubicación de Imágenes

Las imágenes disponibles están en:
```
Curso Agentforce/
├── material/
│   ├── agentforce-agent-astro.avif
│   └── [otras imágenes]
```

## 🖼️ Agregar Imágenes a la Landing Page

### Opción 1: Copiar imágenes al proyecto React

1. Crea una carpeta `src/assets/images` en tu proyecto
2. Copia las imágenes de `material/` a esta nueva carpeta
3. Importa y usa en los componentes

**Ejemplo:**

```javascript
// En src/components/Hero.js o donde necesites

import agentforceLogo from '../assets/images/agentforce-agent-astro.avif';

// En el JSX:
<img src={agentforceLogo} alt="Agentforce" />
```

### Opción 2: Usar rutas relativas a material/

Si prefieres mantener las imágenes en su ubicación actual:

```javascript
// En src/components/Features.js

const featureImage = '../../../material/agentforce-agent-astro.avif';

<img src={featureImage} alt="Agentforce" />
```

### Opción 3: Usar rutas absolutas en público

1. Copia las imágenes a `public/images/`
2. Luego usa:

```javascript
<img src="/images/agentforce-agent-astro.avif" alt="Agentforce" />
```

## 🎨 Componentes Sugeridos para Imágenes

### En Hero.js
Agrega una imagen de fondo o decorativa del logo/marca

### En Features.js
Puedes agregar iconos o imágenes en cada tarjeta de feature

### En Benefits.js
Imágenes que ilustren cada beneficio (productividad, escalabilidad, etc.)

### En VideoSection.js
Usa una imagen como poster/thumbnail del video

## 📝 Ejemplo Completo

```javascript
// src/components/Hero.js
import React from 'react';
import agentforceLogo from '../assets/images/agentforce-agent-astro.avif';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={agentforceLogo} alt="Agentforce" className="hero-logo" />
        <h2 className="hero-title">
          Transforma Tu CRM Salesforce Con Agentes de IA Inteligentes
        </h2>
        {/* ... resto del componente */}
      </div>
    </section>
  );
}

export default Hero;
```

## 🎨 Estilos para Imágenes

Agrega esto a tu CSS para optimizar las imágenes:

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

.hero-logo {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-out;
}
```

## ⚠️ Notas Importantes

- **Formato AVIF:** Es muy eficiente pero considera agregar un fallback PNG/JPG para navegadores antiguos
  ```javascript
  <picture>
    <source srcSet="/images/agentforce.avif" type="image/avif" />
    <source srcSet="/images/agentforce.webp" type="image/webp" />
    <img src="/images/agentforce.jpg" alt="Agentforce" />
  </picture>
  ```

- **Optimización:** Comprime tus imágenes antes de usar
  - Usa herramientas como TinyPNG o ImageOptim
  - El formato AVIF es excelente para web

- **Responsive:** Usa `srcSet` para diferentes resoluciones

## 🚀 Optimización Recomendada

Para mejor rendimiento:

```javascript
// Lazy Loading
<img src="..." loading="lazy" alt="..." />

// Con width y height para evitar CLS
<img 
  src="..." 
  alt="..." 
  width="300" 
  height="200"
  loading="lazy"
/>
```

---

Para más información sobre imágenes en React, consulta:
https://web.dev/image-optimization/
