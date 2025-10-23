// Archivo de Contenido para la Presentación: Sesión A

const slideContent = [
  
  // Lámina de Inicio: Recepción (2 Min)
  {
    layout: 'layout-center-focus',
    title: 'Equipo Proactivo, Empresa Exitosa: De Tareas a Resultados',
    image: {
      src: 'assets/images/slide-2.1.png', // Usando el logo que ya tienes
      alt: 'Logo de Mi Empresa Crece'
    }
  },
  
  // Lámina 1: Portada
  {
    layout: 'layout-default',
    title: '¡Bienvenidos a Consolida 360°!',
    subtitle: 'Empresa Exitosa: de Tareas a Resultados',
    content: '<div><h3>Transformando PYMES en Empresas Exitosas y Sostenibles</h3></div>', 
    image: 'assets/images/slide-1.png',
      alt: 'Portada de Bienvenida a Consolida 360°'
  },
  
  // Lámina 2: Nuestra Esencia (dos columnas, imagen a la izquierda)
  {
    layout: 'layout-default',
    title: 'Mi Empresa Crece: Nuestra Esencia',
    subtitle: 'NUESTRA MISIÓN: TU TRANSFORMACIÓN',
    image: {
      src: 'assets/images/slide-2.1.png', // RUTA CORREGIDA: Usando el nombre real de tu archivo
      alt: 'Diagrama de la esencia de Mi Empresa Crece'
    }
  },

  // Lámina 3: Programa de Transformación
  {
    layout: 'layout-infographic',
    title: 'Tu Programa de Transformación',
    image: {
      src: 'assets/images/slide-3.png'
    }
  },

  // Lámina 4: Sus Guías
  {
    layout: 'layout-center-focus',
    title: 'Sus Guías en este Viaje',
    subtitle: 'Aliados en tu Estrategia',
        image: {
      src: 'assets/images/slide-4.png'
    }
  },

  // Lámina 5: Reglas del Juego
  {
    layout: 'layout-default slide-5-custom',
    title: 'Reglas del Juego y Dinámica',
    subtitle: 'Fomentando la Responsabilidad y el Compromiso',
        image: {
      src: 'assets/images/slide-5.png'
    }
  },

  // Lámina 6: Objetivos de Transformación
  {
    layout: 'layout-two-columns',
    title: 'Objetivos de Transformación',
        content: `
      <p>Estrategias para Fortalecer la Responsabilidad, la Delegación y la Retroalimentación en tu equipo.</p>
      <ul class="lista-objetivos">
        <li>Diagnosticar el nivel de 'ownership'.</li>
        <li>Conectar cada rol con el propósito estratégico.</li>
        <li>Rediseñar el tramo de control.</li>
        <li>Aplicar un método de delegación efectiva.</li>
        <li>Implementar el modelo de semáforo para medir progreso.</li>
        <li>Usar Feedback 360° para consolidar personal clave.</li>
      </ul>
    `,
  },

  // Lámina 7: Líder orquesta
{
    layout: 'layout-split', // Usamos la plantilla de dos columnas
    title: 'Líder Orquesta vs Líder que Crea Líderes: Si sientes que tu día a día es apagar fuegos... estás en el lugar correcto.',
    // Reestructuramos el contenido en dos columnas y movemos la imagen aquí dentro
    content: `
      <div class="content-wrapper">
        
        <div>
          <p>Liderazgo</p>
          <ul style="text-align: left; margin-top: 20px;">
            <li>Soy el cuello de botella en las decisiones.</li>
            <li>Mi equipo no toma la iniciativa.</li>
            <li>Hago de todo.</li>
          </ul>
        </div>

        <div>
          <img src="assets/images/slide-8.png" alt="Persona de negocios multifacética">
        </div>

      </div>
    `,
    // IMPORTANTE: Eliminamos la propiedad 'image' de aquí para que no se duplique
  },

  // Lámina 8: Conceptos Clave
  {
    layout: 'layout-center-focus',
    title: 'Concepto Clave del Programa',
    image: {
      src: 'assets/images/slide-7.png',
      alt: 'Diagrama de conceptos clave'
    },
  },
 
  // Lámina 9: La Hoja de Ruta
  {
    layout: 'layout-center-focus image-full-height',
    title: 'La Hoja de Ruta Hacia la Consilidación', 
    image: {
      src: 'assets/images/slide-8.0.png',
      alt: 'Diagrama de flujo de la ruta de implementación'
    }
  },

// --- SERIE DE EJERCICIOS (MODIFICADO) ---
  {
    layout: 'layout-center-focus',
    title: 'Plan de implementación',
    subtitle: 'Empresa Exitosa: de Tareas a Resultados',
    workbookLink: {
        url: '../workbook/index.html#diagnostico',
        text: 'Abrir Plan de Implementación'
    }
  },

  // Diapositiva de CTA: Compromiso con liderazgo u equipo
  {
    layout: 'layout-center-focus',
    title: 'De tu Plan a tu Legado',
    subtitle: 'Has diseñado el mapa. Ahora comienza el verdadero viaje.',
    content: `
      <div class="highlight-quote" style="font-size: 1.1em; margin-top: 40px; text-align: center;">
        <p>Los ejercicios que completaste no son solo tareas; son los parámetros para sembrar la <strong>semilla de la empresa que quieres construir</strong>: una organización con <strong>propósito</strong>, donde cada miembro del equipo crece y los resultados son sostenibles.</p>
        <p>El cambio real ocurre cuando este plan cobra vida a través de tu <strong>liderazgo</strong>.</p>
      </div>
    `,
            image: {
      src: 'assets/images/slide-11.png'
    }
    },

  // Diapositiva de Cierre: Reflexión
  {
    layout: 'layout-center-focus',
    title: 'Reflexión',
    subtitle: 'Menos es Más, Más Resultados',
        image: {
      src: 'assets/images/slide-17.png'
    }
  },
  
  // Lámina 18: Tareas
  {
    layout: 'layout-center-focus',
    title: 'Tareas Asignadas y Siguientes Pasos',
    subtitle: 'Tu compromiso con la acción',
        content: `
      <p>Asegura una implementación <strong>exitosa</strong>.</p>
      <ul class="lista-objetivos">
        <li>Da seguimiento a las sesiones semanales con tus colaboradores.</li>
        <li>Configura tu ecosistema digital.</li>
        <li>No faltes a la próxima sesión.</li>
        <li>Programa tu reunión individual con el equipo de consultoría.</li>
      </ul>
    `, 
  },

// Diapositiva Final: Contacto
  {
    layout: 'layout-center-focus',
    title: 'Gracias. El Viaje Continúa.',
    image: {
      src: 'assets/images/slide-19.png'
  }
},

  {
    layout: 'layout-center-focus',
    title: 'Equipo Proactivo, Empresa Exitosa: De Tareas a Resultados',
    subtitle: 'Gracias por su compromiso.',
    image: {
      src: 'assets/images/slide-2.1.png', // Mismo logo para consistencia
      alt: 'Logo de Mi Empresa Crece'
    }
  }

];
