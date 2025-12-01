% GUÍA RÁPIDA DE INICIO - Agentforce Landing Page

# ⚡ Inicio en 3 Pasos

## Paso 1: Instalar Dependencias

Abre tu terminal/PowerShell en esta carpeta y ejecuta:

```
npm install
```

Esto instalará todas las librerías necesarias (React, etc.)

## Paso 2: Iniciar el Servidor

Ejecuta:

```
npm start
```

Tu navegador se abrirá automáticamente en `http://localhost:3000`

## Paso 3: Disfruta

¡Tu landing page está lista! Verás todos los cambios en tiempo real.

---

# 🎬 Agregar tu Video

1. Ve a la carpeta: `../Videos/Completo/`
2. Coloca tu archivo de video allí (ej: `Anuncio 1.mp4`)
3. La página lo reproducirá automáticamente

---

# 🎨 Personalizar Contenido

### Cambiar el Título Principal
1. Abre: `src/components/Hero.js`
2. Busca: `<h2 className="hero-title">`
3. Edita el texto
4. ¡Listo! Los cambios aparecen al instante en el navegador

### Cambiar Características
1. Abre: `src/components/Features.js`
2. Edita el array `features`
3. Agrega o modifica los ítems

### Cambiar Testimonios
1. Abre: `src/components/Testimonials.js`
2. Edita el array `testimonials`

### Cambiar Preguntas FAQ
1. Abre: `src/components/FAQ.js`
2. Edita el array `faqs`

---

# 📧 Conectar Formulario

Actualmente el formulario muestra un `alert()`. Para conectarlo con un servicio:

1. Abre: `src/components/CTA.js`
2. Busca la función `handleSubmit`
3. Reemplaza con tu código de integración

Ejemplo con un servicio de email:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Envía a tu backend
  await fetch('https://tu-servidor.com/inscribir', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

---

# 🚀 Deploy (Subir a Internet)

## Opción 1: Netlify (Gratis)

```bash
npm install -g netlify-cli
npm run build
netlify deploy
```

## Opción 2: Vercel (Gratis)

```bash
npm install -g vercel
vercel
```

## Opción 3: GitHub Pages

Más info en el README.md

---

# 🎨 Cambiar Colores

Todos los colores están en: `src/styles/index.css`

```css
:root {
  --primary-purple: #751EEB;    /* Cambiar aquí */
  --primary-green: #01EB3F;     /* Cambiar aquí */
  --white: #FFFFFF;
  --black: #000000;
}
```

---

# ❓ Problemas Comunes

### "npm: command not found"
→ Node.js no está instalado. Descárgalo de https://nodejs.org/

### "Port 3000 already in use"
→ Otro proceso usa el puerto. Cierra la otra aplicación o cambia el puerto:
```bash
PORT=3001 npm start
```

### Video no se reproduce
→ Asegúrate que el archivo `.mp4` está en: `../Videos/Completo/`

### Cambios no se ven
→ Recarga el navegador (F5 o Cmd+R)

---

# 📚 Recursos

- React: https://react.dev
- CSS: https://developer.mozilla.org/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/docs/Web/JavaScript

---

# ✅ Checklist Antes de Publicar

- [ ] Video subido en `../Videos/Completo/`
- [ ] Textos personalizados (Hero, Features, etc.)
- [ ] Formulario conectado a tu backend
- [ ] Redes sociales/contacto actualizadas en Footer
- [ ] Probado en móvil y escritorio
- [ ] Emails de confirmación configurados
- [ ] Dominio personalizado (si tienes)

---

¡Éxito con tu curso de Agentforce! 🚀
