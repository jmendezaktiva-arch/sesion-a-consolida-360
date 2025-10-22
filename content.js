// Archivo de Contenido para la Presentación: Sesión A (Versión Limpia)

const slideContent = [
  // Diapositiva 1: Portada
  {
    layout: 'layout-default',
    title: '¡Bienvenidos a Consolidación 360°!', 
    subtitle: 'EMPRESA EXITOSA: DE TAREAS A RESULTADOS', 
    content: '<div><h3>Transformando PYMES en Empresas Exitosas y Sostenibles</h3></div>', 
    image: 'assets/images/slide-1.png',
    background: '#FFFFFF' 
  },
  
  // Diapositiva 2: Nuestra Misión
   {
    layout: 'layout-two-columns',
    title: 'Mi Empresa Crece: Nuestra Esencia',
    subtitle: 'NUESTRA MISIÓN: TU TRANSFORMACIÓN',
    image: {
      src: 'assets/images/slide-2.1.png', // RUTA CORREGIDA: Usando el nombre real de tu archivo
      alt: 'Diagrama de la esencia de Mi Empresa Crece'
    }
  },

  // Diapositiva 3: Tu Programa de Transformación 
  {
    layout: 'layout-infographic',
    title: 'Tu Programa de Transformación',
    subtitle: 'Los 3 Pilares de tu Consolidación',
    image: {
      src: 'assets/images/slide-3.png'
    }
  },

  // Diapositiva 4: Sus Guías
  {
    layout: 'layout-center-focus',
    title: 'Sus Guías en este Viaje',
    subtitle: 'Aliados en tu Estrategia',
        image: {
      src: 'assets/images/slide-4.png'
    }
  },

  // Diapositiva 5: Reglas del Juego
  {
    layout: 'layout-default slide-5-custom',
    title: 'Reglas del Juego y Dinámica',
    subtitle: 'Fomentando la Responsabilidad y el Compromiso',
        image: {
      src: 'assets/images/slide-5.png'
    }
  },

  // Diapositiva 6: Objetivos de Transformación
  {
    layout: 'layout-split',
    title: 'OBJETIVOS DE TRANSFORMACIÓN',
    content: `
      <p>Estrategias para Fortalecer la Responsabilidad, la Delegación y la Retroalimentación en tu equipo.</p>
      <ul>
        <li>Diagnosticar el nivel de 'ownership'.</li>
        <li>Conectar cada rol con el propósito estratégico.</li>
        <li>Rediseñar el tramo de control.</li>
        <li>Aplicar un método de delegación efectiva.</li>
        <li>Implementar el modelo de semáforo para medir progreso.</li>
        <li>Usar Feedback 360° para consolidar personal clave.</li>
      </ul>
    `,
// --- MODIFICACIÓN: Corregido para usar la imagen correspondiente a la diapositiva ---
    image: 'assets/images/slide-6.png',
  },

  // Diapositiva 7: Líder orquesta
  {
    layout: 'layout-split',
    title: 'LÍDER ORQUESTA VS LÍDER QUE CREA LÍDERES: Si sientes que tu día a día es apagar fuegos... estás en el lugar correcto.', 
    content: `
          <p>LIDERAZGO</p>
      <ul>
        <li>Soy el cuello de botella en las decisiones.</li>
        <li>Mi equipo no toma la iniciativa</li>
        <li>Hago de todo</li>
      </ul>
    `,
        image: 'assets/images/slide-8.png',
  },

  // Diapositiva 8: Conceptos Clave
  {
    layout: 'layout-center-focus',
    title: 'CONCEPTO CLAVE DEL PROGRAMA', 
    image: 'assets/images/slide-7.png',
    content: 'Gestión efectiva del personal, Ownership, Tramo de control, Delegación, Feedback 360 y más.'
  },

  // Diapositiva 9: La Hoja de Ruta
  {
    layout: 'layout-center-focus',
    title: 'LA HOJA DE RUTA HACIA LA CONSOLIDACIÓN', 
    image: 'assets/images/slide-8.0.png'
  },
 
  // --- SERIE DE EJERCICIOS ---
  // ... (Modificado)
  {
    layout: 'layout-center-focus',
    title: 'Plan de implementación',
    subtitle: 'Diagnosticando tu Ecosistema Digital',
    workbookLink: {
        url: '../workbook/index.html#diagnostico',
        text: 'Abrir Plan de Implementación'
    }
  },

  // Diapositiva de Cierre: Reflexión
  {
    layout: 'layout-center-focus',
    title: 'REFLEXIÓN',
    content: `<blockquote>"Cuando el equipo entiende lo que hay que lograr, el crecimiento empieza a depender de cuánto Propósito encuentra el equipo en lo que hacen."</blockquote><p>- Anónimo</p>`,
    background: '#F4F4F4'
  },
  
  // Diapositiva Final: Contacto
  {
    layout: 'layout-center-focus',
    title: 'Gracias. El Viaje Continúa.',
    content: `<p>Gracias por participar en nuestra sesión sobre gestión del talento.</p><h3 class="contact-heading">¡No te quedes con dudas! Contáctanos para más información.</h3><p>Jorge Méndez, especialista en implementación de estrategias efectivas.</p>`
  }
];