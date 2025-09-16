// Archivo de Contenido para la Presentación: Sesión A (Versión Limpia)

const slideContent = [
  // Diapositiva 1: Portada
  {
    layout: 'layout-center-focus',
    title: '¡Bienvenidos a Consolidación 360°!', 
    subtitle: 'EMPRESA EXITOSA: DE TAREAS A RESULTADOS', 
    content: '<div><h3>Transformando PYMES en Empresas Exitosas y Sostenibles</h3></div>', 
    image: 'assets/images/slide-1.png',
    background: '#FFFFFF' 
  },
  
  // Diapositiva 2: Nuestra Misión
  {
    layout: 'layout-split',
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
    layout: 'layout-infographic',
    title: 'Tu Programa de Transformación',
    content: `<div class="icon-grid">
                <div class="icon-item"><i class="fas fa-users"></i><p>Equipo</p></div>
                <div class="connector">&rarr;</div>
                <div class="icon-item"><i class="fas fa-chart-line"></i><p>Ventas</p></div>
                <div class="connector">&rarr;</div>
                <div class="icon-item"><i class="fas fa-coins icon-highlight"></i><p><strong>Inversión</strong></p></div>
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

  // --- EJERCICIO 2 CORREGIDO Y REESTRUCTURADO ---
  {
    layout: 'layout-default', // Usamos un layout genérico
    title: "EJERCICIO 2: 'VOCACIÓN DE PUESTOS CLAVE'",
    // Construimos toda la estructura de 3 columnas directamente aquí
    content: `
      <div class="columns-wrapper">
        
        <div class="column">
          <h3>Objetivo:</h3>
          <p>Identificar la brecha entre el desempeño actual y el impacto estratégico esperado del puesto.</p>
          <h3>Consideraciones:</h3>
          <ul>
            <li>Evalúa desde la perspectiva de resultados, no solo tareas.</li>
            <li>Detecta el nivel de propiedad del puesto sobre los resultados.</li>
          </ul>
        </div>
        
        <div class="column">
          <img src="assets/images/ejercicio-2.png" alt="Imagen del Ejercicio 2">
        </div>
        
        <div class="column">
          <img src="assets/images/ejercicio-2.1.png" alt="Segunda imagen del Ejercicio 2">
        </div>

      </div>
    `
    // Ya no necesitamos las propiedades 'image' e 'image2' porque están dentro de 'content'
  },

  {
    layout: 'layout-split',
    title: "EJERCICIO 3: 'PRIORIDADES DE MEJORA PUESTOS CLAVE'",
    content: `<h3>Objetivo:</h3><p>Comprender cómo el colaborador puede resolver de manera satisfactoria y autónoma un problema con sentido de ownership.
</p><h3>Consideraciones:</h3><ul><li>Enfócate en situaciones con mayor impacto estratégico.</li><li>Analiza causas raíz, no solo síntomas.</li><li>Vincula cada mejora con un cambio de mentalidad (ownership).</li></ul>`,
    image: 'assets/images/ejercicio-4.jpg'
  },

  {
    layout: 'layout-split',
    title: "EJERCICIO 4: 'LA MISIÓN DEL ROL'",
    content: `<h3>Objetivo:</h3><p>Documentar una definición de puesto clave que sea clara, potente e inspiradora.</p><h3>Consideraciones:</h3><ul><li>Define la misión desde el impacto estratégico.</li><li>Alinea responsabilidades con objetivos medibles.</li><li>Incluye el propósito para inspirar ownership.</li></ul>`,
    image: 'assets/images/ejercicio-4.jpg'
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