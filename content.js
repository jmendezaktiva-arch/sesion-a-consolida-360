const slideContent = [
  // Diapositiva 1: Portada
  {
    layout: 'layout-center-focus', // Diseño centrado
    title: 'Sesión A: Planificación Estratégica',
    subtitle: 'Definiendo el Norte de tu Empresa',
    image: 'assets/images/portada-sesion-a.jpg', // Nueva imagen de portada
    background: '' 
  },

  // Diapositiva 2: Con dos columnas (texto a la izquierda, imagen a la derecha)
  {
    layout: 'layout-split', // Diseño de pantalla dividida
    title: '¿Quiénes somos y por qué esto importa?',
    content: `
      <p>Aquí va el texto principal de la diapositiva.</p>
      <ul>
        <li>Puedes usar listas.</li>
        <li>Son muy efectivas para resumir ideas.</li>
      </ul>
    `,
    image: 'assets/images/equipo-estrategico.png' // Imagen para esta diapositiva
  },

  // Diapositiva 3: Solo título e imagen grande
  {
    layout: 'layout-center-focus',
    title: 'El Mapa Estratégico General',
    image: 'assets/images/mapa-conceptual.svg'
  },
  
  // ... y así sucesivamente para cada diapositiva de tu nueva sesión.
];