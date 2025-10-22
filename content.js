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
    layout: 'layout-default',
    title: 'Mi Empresa Crece: Nuestra Esencia',
    subtitle:'NUESTRA MISIÓN: TU TRANSFORMACIÓN', 
    content: `
      <p><strong>Metodología probada</strong>. Mi Empresa Crece es tu socio estratégico para la consolidación de tu negocio.</p>
      <h3 class="highlight-quote">"No hay transformación empresarial sin transformación personal."</h3>
    `,
    image: 'assets/images/slide-2.1.png'
  },

  // Diapositiva 3: Tu Programa de Transformación 
  {
    layout: 'layout-center-focus',
    title: 'Tu Programa de Transformación',
    content: `<div class="icon-grid">
                <div class="icon-item"><i class="fas fa-users icon-highlight"></i><p><strong>Equipo</strong></p></div>
                <div class="connector">&rarr;</div>
                <div class="icon-item"><i class="fas fa-chart-line"></i><p>Ventas</p></div>
                <div class="connector">&rarr;</div>
                <div class="icon-item"><i class="fas fa-coins"></i><p>Inversión</p></div>
              </div>`
  },

  // Diapositiva 4: Sus Guías
  {
    layout: 'layout-split',
    title: 'Sus Guías en este Viaje',
    content: '<p><strong>Expertos dedicados a la implementación.</strong></p><div class="session-flow-text">Sesión Grupal &rarr; Implementación &rarr; Sesión Individual &rarr; Ajuste</div>',
    image: 'assets/images/slide-4.jpeg',
    image2: 'assets/images/slide-4.png'
  },

  // Diapositiva 5: Reglas del Juego
  {
    layout: 'layout-default slide-5-custom',
    title: 'Reglas del Juego y Dinámica',
    content: `<p>Establecer un marco de Responsabilidad y compromiso. No son reglas, son los <strong>cimientos para construir juntos</strong>.</p>
              <ul class="infographic-list">
                <li><i class="fas fa-video"></i> <div><strong>Cámara encendida = Compromiso</strong><br>Estar presente y conectado con el grupo.</div></li>
                <li><i class="fas fa-microphone-lines"></i> <div><strong>Participación activa = Proactividad</strong><br>Tu aprendizaje depende de tu involucramiento.</div></li>
                <li><i class="fas fa-lightbulb"></i> <div><strong>Mente abierta = Crecimiento</strong><br>Dispuesto a desaprender y adoptar nuevos métodos.</div></li>
                <li><i class="fas fa-clock"></i> <div><strong>Puntualidad = Respeto</strong><br>Valoramos tu tiempo y el de los demás.</div></li>
              </ul>`
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
    image: 'assets/images/slide-6.png'
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
  // ... (El resto de las diapositivas de ejercicios ya estaban limpias)
  {
    layout: 'layout-split',
    title: "EJERCICIO 1: 'DEPENDENCIA OPERATIVA DEL LÍDER'",
    content: `<h3>Objetivo:</h3><p>Identificar la dependencia del equipo en el líder para decisiones y procesos clave.</p><h3>Consideraciones:</h3><ul><li>Sé honesto, es para tu beneficio.</li><li>Analiza patrones en la operación diaria.</li><li>Conecta cada respuesta con el impacto en resultados.</li></ul>`,
    image: 'assets/images/slide-11.png'
  },

// --- EJERCICIO 2: REDEFINIDO A DOS COLUMNAS (TEXTO + IMAGEN) ---
  {
    layout: 'layout-split', // Usamos el layout de pantalla dividida.
    title: "EJERCICIO 2: 'VOCACIÓN DE PUESTOS CLAVE'",
    
    // El contenido de texto va aquí y ocupará la primera columna.
    content: `
      <h3>OBJETIVO:</h3>
      <p>Identificar la brecha entre el desempeño actual y el impacto estratégico esperado del puesto.</p>
      <h3>CONSIDERACIONES:</h3>
      <ul>
        <li>Evalúa desde la perspectiva de resultados, no solo tareas.</li>
        <li>Detecta el nivel de propiedad del puesto sobre los resultados.</li>
      </ul>
    `,
    
    // La imagen va aquí y ocupará la segunda columna.
    image: 'assets/images/ejercicio-2.png' // Asegúrate de que este archivo exista en tu carpeta de imágenes.
  },

  {
    layout: 'layout-split',
    title: "EJERCICIO 3: 'PRIORIDADES DE MEJORA PUESTOS CLAVE'",
    content: `<h3>Objetivo:</h3><p>Comprender cómo el colaborador puede resolver de manera satisfactoria y autónoma un problema con sentido de ownership.
</p><h3>Consideraciones:</h3><ul><li>Enfócate en situaciones con mayor impacto estratégico.</li><li>Analiza causas raíz, no solo síntomas.</li><li>Vincula cada mejora con un cambio de mentalidad (ownership).</li></ul>`,
    image: 'assets/images/ejercicio-3.png'
  },

  {
    layout: 'layout-split',
    title: "EJERCICIO 4: 'LA MISIÓN DEL ROL'",
    content: `<h3>Objetivo:</h3><p>Documentar una definición de puesto clave que sea clara, potente e inspiradora.</p><h3>Consideraciones:</h3><ul><li>Define la misión desde el impacto estratégico.</li><li>Alinea responsabilidades con objetivos medibles.</li><li>Incluye el propósito para inspirar ownership.</li></ul>`,
    image: 'assets/images/ejercicio-4.png'
  },

{
    layout: 'layout-split',
    title: "EJERCICIO 5: 'GUÍA DE BOLSILLO PARA UNA DELEGACIÓN EXITOSA'", 
    content: `
      <h3>OBJETIVO:</h3>
      <p>Realizar un diagnóstico rápido de cuánto aplicas como líder las buenas prácticas de delegación.</p>
      <h3>CONSIDERACIONES:</h3>
      <ul>
        <li>Evalúa objetivamente cómo delegas actualmente.</li>
        <li>Céntrate en tareas estratégicas y no sólo operativas.</li>
        <li>Analiza el proceso, no solo el resultado. </li>
      </ul>
    `,
    image: 'assets/images/ejercicio-5.png' // Asegúrate de añadir la imagen correspondiente.
  },

  {
    layout: 'layout-split',
    title: "EJERCICIO 6: 'FORMATO DE RETROALIMENTACIÓN SEMÁFORO'", 
    content: `
      <h3>OBJETIVO:</h3>
      <p>Implementar un sistema para mejorar los resultados y Ownership de los colaboradores de manera objetiva y ágil.</p>
      <h3>CONSIDERACIONES:</h3>
      <ul>
        <li>Sé objetivo, este ejercicio es la antesala para establecer metas claras.</li>
        <li>Es una herramienta ágil para aplicar con constancia y formalidad.</li>
        <li>No sustituye la definición de indicadores de desempeño.</li>
      </ul>
    `,
    image: 'assets/images/ejercicio6.png' // Asegúrate de añadir la imagen correspondiente.
  },

  {
    layout: 'layout-split',
    title: "EJERCICIO 7: 'GUÍA DE OBSERVACIÓN PARA ROLE-PLAY'", 
    content: `
      <h3>OBJETIVO:</h3>
      <p>Permitir la práctica del ciclo de delegación y feedback en un entorno seguro para afinar habilidades de seguimiento.</p>
      <h3>CONSIDERACIONES:</h3>
      <ul>
        <li>Asume el ejercicio como una práctica real de liderazgo. </li>
        <li>Observa y registra conductas, no juicios. </li>
        <li>Identifica aprendizajes aplicables a tu negocio. </li>
      </ul>
    `,
    image: 'assets/images/ejercicio-7.png' // Asegúrate de añadir la imagen correspondiente.
  },

  {
    layout: 'layout-split',
    title: "EJERCICIO 8: 'PLAN DE ACCIÓN DE 7 DÍAS'", 
    content: `
      <h3>OBJETIVO:</h3>
      <p>Comprometerse con un plan de acción claro para los primeros 7 días, seleccionando un grupo piloto para la implementación. </p>
      <h3>CONSIDERACIONES:</h3>
      <ul>
        <li>Sé concreto y realista en tu plan. </li>
        <li>Elige colaboradores estratégicos para iniciar. </li>
        <li>Anticipa obstáculos y prepara posibles soluciones. </li>
      </ul>
    `,
    image: 'assets/images/ejercicio-8.png' // Asegúrate de añadir la imagen correspondiente.
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