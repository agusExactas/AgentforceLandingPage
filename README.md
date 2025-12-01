# 🚀 Agentforce Landing Page - Curso de Venta

Landing page profesional de venta del curso especializado en **Agentes de IA Agentforce** para optimizar esfuerzos manuales en CRM Salesforce.

## 🎯 Características

✅ **Diseño Moderno y Responsive**
- Colores: Púrpura (#751EEB), Verde Neon (#01EB3F), Blanco, Negro y Azules
- Fuente: Arial Bold en todos los textos
- Completamente adaptado para móviles, tablets y escritorio

✅ **Secciones Optimizadas para Conversión**
- Hero section con llamadas a la acción claras
- Features: Lo que dominarás en el curso
- Benefits: Por qué invertir en este curso
- Video section: Espacio para video promocional
- Testimonios: Prueba social de estudiantes satisfechos
- FAQ: Preguntas frecuentes respondidas
- CTA Form: Formulario de inscripción con validación

✅ **Componentes Interactivos**
- Menú de navegación pegajoso
- Animaciones suaves y transiciones
- Efectos hover en botones y tarjetas
- Acordeón de FAQ funcional

✅ **Estructura Preparada para Videos**
- La sección de video apunta a `./Videos/Completo/Anuncio 1.mp4`
- Compatible con cualquier formato de video HTML5
- Reproductor nativo del navegador con controles

## 📁 Estructura del Proyecto

```
Venta del curso/
├── public/
│   └── index.html              # Archivo HTML principal
├── src/
│   ├── components/
│   │   ├── Header.js           # Encabezado con navegación
│   │   ├── Hero.js             # Sección principal
│   │   ├── Features.js         # Características del curso
│   │   ├── Benefits.js         # Beneficios
│   │   ├── VideoSection.js     # Sección de video
│   │   ├── Testimonials.js     # Testimonios
│   │   ├── FAQ.js              # Preguntas frecuentes
│   │   ├── CTA.js              # Llamada a la acción y formulario
│   │   └── Footer.js           # Pie de página
│   ├── styles/
│   │   ├── index.css           # Estilos globales
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── features.css
│   │   ├── benefits.css
│   │   ├── video-section.css
│   │   ├── testimonials.css
│   │   ├── faq.css
│   │   ├── cta.css
│   │   └── footer.css
│   ├── App.js                  # Componente principal
│   └── index.js                # Punto de entrada
├── package.json                # Dependencias del proyecto
├── .gitignore                  # Archivos ignorados por git
└── README.md                   # Este archivo
```

## 🎬 Cómo Usar los Videos

La sección de video está configurada para reproducir archivos desde `./Videos/Completo/`. Para que funcione:

1. **Asegúrate de que tus videos están en la ruta correcta:**
   - Navega desde la carpeta `Venta del curso` hacia: `../Videos/Completo/`
   - Coloca tus archivos `.mp4` o `.webm` en esa carpeta

2. **Los formatos soportados son:**
   - MP4 (.mp4)
   - WebM (.webm)
   - Ogg (.ogv)

3. **Para cambiar el video:**
   - Edita `src/components/VideoSection.js`
   - Cambia la línea: `<source src="./Videos/Completo/Anuncio 1.mp4" type="video/mp4" />`
   - Reemplaza con el nombre de tu video

## 📦 Instalación

### Requisitos Previos
- Node.js v14 o superior
- npm o yarn

### Pasos

1. **Abre la terminal en la carpeta del proyecto**

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm start
   ```

   La aplicación se abrirá automáticamente en `http://localhost:3000`

## 🏗️ Construir para Producción

Para crear una versión optimizada lista para producción:

```bash
npm run build
```

Se generará una carpeta `build/` con todos los archivos optimizados.

## 🎨 Personalización

### Cambiar Colores
Edita las variables en `src/styles/index.css`:
```css
:root {
  --primary-purple: #751EEB;
  --primary-green: #01EB3F;
  --white: #FFFFFF;
  --black: #000000;
  /* ... más variables */
}
```

### Cambiar Contenido
- **Hero:** Edita `src/components/Hero.js`
- **Features:** Edita `src/components/Features.js`
- **Benefits:** Edita `src/components/Benefits.js`
- **Testimonios:** Edita `src/components/Testimonials.js`
- **FAQ:** Edita `src/components/FAQ.js`

### Integrar Formulario
El formulario en `src/components/CTA.js` actualmente muestra un `alert()`. Para integrarlo con tu backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Envía datos a tu servidor
  const response = await fetch('https://tu-api.com/inscripciones', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  // Procesa la respuesta
};
```

## 📊 Copy de Ventas Incluido

La landing page incluye redacción persuasiva y psicología de ventas optimizada para:
- ✨ Despertar urgencia
- 🎯 Comunicar valor claramente
- 💎 Establecer diferenciador
- 🏆 Construir confianza con prueba social
- 🚀 Impulsar acciones inmediatas

## 🚀 Próximos Pasos

1. **Conecta tu video:** Coloca el archivo en `../Videos/Completo/`
2. **Personaliza los textos:** Ajusta el copy a tu voz de marca
3. **Integra el formulario:** Conecta con tu CRM o base de datos
4. **Deploy:** Sube a Netlify, Vercel, o tu servidor preferido

## 📝 Notas Importantes

- ✅ La página es completamente **responsive** - funciona perfectamente en móviles
- ✅ Incluye **animaciones suaves** que no ralentizan el sitio
- ✅ Optimizada para **SEO** con meta tags y estructura semántica
- ✅ Font **Arial Bold** aplicada globalmente como se solicitó
- ✅ Colores **#751EEB y #01EB3F** como colores primarios

## 🆘 Soporte

Para dudas sobre la estructura o personalización, revisa:
- Componentes en `src/components/`
- Estilos en `src/styles/`
- Documentación oficial de React: https://react.dev

---

**Hecho con ❤️ para transformadores digitales como tú**
