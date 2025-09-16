// Archivo de Contenido para la Presentación: Sesión A
// Para editar el texto de una diapositiva, solo modifica el objeto correspondiente aquí.

const slideContent = [
  // Diapositiva 1: Portada
  {
    layout: 'layout-center-focus',
    title: 'EMPRESA EXITOSA: DE TAREAS A RESULTADOS', // [cite: 3]
    subtitle: 'Transformando PYMES en Empresas Exitosas y Sostenibles', // [cite: 5]
    image: 'assets/images/portada-sesion-a.jpg', // REEMPLAZA ESTA IMAGEN
    background: '#FFFFFF' 
  },
  
  // Diapositiva 2: Nuestra Misión
  {
    layout: 'layout-split',
    title: 'NUESTRA MISIÓN: TU TRANSFORMACIÓN', // [cite: 25]
    content: `
      [cite_start]<p>Mi Empresa Crece es tu socio estratégico para la consolidación de tu negocio. [cite: 4]</p>
      <h3 style="margin-top: 40px; font-style: italic; border-left: 4px solid var(--accent-color); padding-left: 15px;">
        [cite_start]"No hay transformación empresarial sin transformación personal." [cite: 26]
      </h3>
    `,
    image: 'assets/images/mision-sesion-a.jpg' // REEMPLAZA ESTA IMAGEN
  },

  // Diapositiva 3: La Hoja de Ruta
  {
    layout: 'layout-infographic',
    title: 'LA HOJA DE RUTA HACIA LA CONSOLIDACIÓN', // [cite: 146]
    content: `
      <div class="icon-grid">
        <div class="icon-item">
          <i class="fas fa-users" style="color: var(--accent-color);"></i>
          <p><strong>(A) Equipos con Ownership</strong></p>  
        </div>
        <div class="connector">&rarr;</div>
        <div class="icon-item">
          <i class="fas fa-chart-line"></i>
          <p>(B) Ecosistema Digital</p>  
        </div>
        <div class="connector">&rarr;</div>
        <div class="icon-item">
          <i class="fas fa-coins"></i>
          <p>(C) Inversiones Inteligentes</p> 
        </div>
      </div>
    `
  },

  // Diapositiva 4: Sus Guías
  {
    layout: 'layout-split',
    title: 'Sus Guías en este Viaje',
    content: `
      <p>Expertos dedicados a potenciar la gestión y transformación de tu empresa.</p>
    `,
    image: 'assets/images/facilitador-abugaber.jpg', // REEMPLAZA ESTA IMAGEN
    image2: 'assets/images/facilitador-mendez.jpg' // REEMPLAZA ESTA IMAGEN
  },

  // Diapositiva 5: Reglas del Juego
  {
    layout: 'layout-default slide-5-custom',
    title: 'REGLAS DEL JUEGO Y DINÁMICA', // [cite: 27]
    content: `
      <p style="text-align: center;">Establecemos un marco de compromiso para construir juntos.</p>
      <ul class="infographic-list">
        [cite_start]<li><i class="fas fa-video"></i> <div><strong>Cámara encendida para conectar</strong><br>Es un taller de consultoría aplicada. [cite: 29]</div></li>
        [cite_start]<li><i class="fas fa-comments"></i> <div><strong>Participación activa para el mayor beneficio</strong><br>Tu involucramiento es clave. [cite: 30]</div></li>
        [cite_start]<li><i class="fas fa-laptop"></i> <div><strong>Mentalidad de implementación</strong><br>Indispensable acceder desde PC, Laptop o Tablet. [cite: 31]</div></li>
        [cite_start]<li><i class="fas fa-hand-paper"></i> <div><strong>Levanta la mano para participar</strong><br>Usa el indicador para pedir la palabra. [cite: 35]</div></li>
      </ul>
    `
  },

  // Diapositiva 6: Objetivos de Transformación
  {
    layout: 'layout-split',
    title: 'OBJETIVOS DE TRANSFORMACIÓN', // [cite: 38]
    content: `
      [cite_start]<p>Estrategias para Fortalecer la Responsabilidad, la Delegación y la Retroalimentación en tu equipo. [cite: 39]</p>
      <ul>
        [cite_start]<li>Diagnosticar el nivel de 'ownership'. [cite: 40]</li>
        [cite_start]<li>Conectar cada rol con el propósito estratégico. [cite: 41]</li>
        [cite_start]<li>Rediseñar el tramo de control. [cite: 42]</li>
        [cite_start]<li>Aplicar un método de delegación efectiva. [cite: 43]</li>
        [cite_start]<li>Implementar el modelo de semáforo para medir progreso. [cite: 44]</li>
        [cite_start]<li>Usar Feedback 360° para consolidar personal clave. [cite: 45]</li>
      </ul>
    `,
    image: 'assets/images/objetivos-sesion-a.jpg' // REEMPLAZA ESTA IMAGEN
  },

  // Diapositiva 7: Conceptos Clave
  {
    layout: 'layout-center-focus',
    title: 'CONCEPTO CLAVE DEL PROGRAMA', // [cite: 52]
    image: 'assets/images/conceptos-clave-sesion-a.png', // REEMPLAZA ESTA IMAGEN
    content: 'Gestión efectiva del personal, Ownership, Tramo de control, Delegación, Feedback 360 y más. [cite: 53, 54, 55, 57, 59]'
  },

  // Diapositiva 8: Elementos Clave (Ruta de Implementación)
  {
    layout: 'layout-center-focus',
    title: 'ELEMENTOS CLAVE DEL PROGRAMA', // [cite: 61]
    image: 'assets/images/ruta-implementacion-sesion-a.png' // REEMPLAZA ESTA IMAGEN
  },

  // --- SERIE DE EJERCICIOS ---
  {
    layout: 'layout-split',
    title: "EJERCICIO 1: 'DEPENDENCIA OPERATIVA DEL LÍDER'", // [cite: 65]
    content: `
      <h3>Objetivo:</h3>
      [cite_start]<p>Identificar la dependencia del equipo en el líder para decisiones y procesos clave. [cite: 64]</p>
      <h3>Consideraciones:</h3>
      <ul>
        [cite_start]<li>Sé honesto, es para tu beneficio. [cite: 68]</li>
        [cite_start]<li>Analiza patrones en la operación diaria. [cite: 69]</li>
        [cite_start]<li>Conecta cada respuesta con el impacto en resultados. [cite: 70]</li>
      </ul>
    `,
    image: 'assets/images/ejercicio-1.jpg' // REEMPLAZA ESTA IMAGEN
  },
  {
    layout: 'layout-split',
    title: "EJERCICIO 2: 'VOCACIÓN DE PUESTOS CLAVE'", // [cite: 77]
    content: `
      <h3>Objetivo:</h3>
      [cite_start]<p>Identificar la brecha entre el desempeño actual y el impacto estratégico esperado del puesto. [cite: 73]</p>
      <h3>Consideraciones:</h3>
      <ul>
        [cite_start]<li>Evalúa desde la perspectiva de resultados, no solo tareas. [cite: 75]</li>
        [cite_start]<li>Detecta el nivel de propiedad del puesto sobre los resultados. [cite: 76]</li>
      </ul>
    `,
    image: 'assets/images/ejercicio-2.jpg' // REEMPLAZA ESTA IMAGEN
  },
  {
    layout: 'layout-split',
    title: "EJERCICIO 4: 'LA MISIÓN DEL ROL'", // [cite: 93]
    content: `
      <h3>Objetivo:</h3>
      [cite_start]<p>Documentar una definición de puesto clave que sea clara, potente e inspiradora. [cite: 88]</p>
      <h3>Consideraciones:</h3>
      <ul>
        [cite_start]<li>Define la misión desde el impacto estratégico. [cite: 90]</li>
        [cite_start]<li>Alinea responsabilidades con objetivos medibles. [cite: 91]</li>
        [cite_start]<li>Incluye el propósito para inspirar ownership. [cite: 92]</li>
      </ul>
    `,
    image: 'assets/images/ejercicio-4.jpg' // REEMPLAZA ESTA IMAGEN
  },
  // ... (Puedes seguir este patrón para los demás ejercicios)

  // Diapositiva de Cierre: Reflexión
  {
    layout: 'layout-center-focus',
    title: 'REFLEXIÓN', // [cite: 127]
    content: `
      <blockquote style="font-size: 1.5em; text-align: center; max-width: 80%; margin: 40px auto;">
        [cite_start]"Cuando el equipo entiende lo que hay que lograr, el crecimiento empieza a depender de cuánto Propósito encuentra el equipo en lo que hacen." [cite: 128]
      </blockquote>
      <p>- Anónimo</p>
    `,
    background: '#F4F4F4'
  },
  
  // Diapositiva Final: Contacto
  {
    layout: 'layout-center-focus',
    title: 'Gracias. El Viaje Continúa.',
    content: `
      [cite_start]<p>Gracias por participar en nuestra sesión sobre gestión del talento. [cite: 130]</p>
      <h3 style="margin-top: 50px;">¡No te quedes con dudas! [cite_start]Contáctanos para más información. [cite: 132]</h3>
      [cite_start]<p>Jorge Méndez, especialista en implementación de estrategias efectivas. [cite: 131]</p>
    `
  }
];