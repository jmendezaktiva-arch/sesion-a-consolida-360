// ⚙️ script.js

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('presentation-container');

  // Recorremos cada objeto de diapositiva en nuestro archivo de contenido
  slidesData.forEach(slide => {
    const slideElement = document.createElement('div');
    slideElement.className = `slide ${slide.type}`; // Asigna clases para el CSS

    let innerHTML = '';

    // Usamos un 'switch' para construir el HTML según el tipo de diapositiva
    switch (slide.type) {
      case 'title-slide':
        innerHTML = `
          <h1>${slide.title}</h1>
          <p>${slide.subtitle}</p>
        `;
        break;

      case 'exercise-slide':
        innerHTML = `
          <h2>${slide.exercise_number}: ${slide.title}</h2>
          <p><strong>Objetivo:</strong> ${slide.objective}</p>
          <p><strong>Consideraciones:</strong></p>
          <ul>
            ${slide.considerations.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `;
        break;
      
      case 'image-slide':
        innerHTML = `
          <h1>${slide.title}</h1>
          <p>${slide.text}</p>
          <img src="${slide.image}" alt="${slide.title}">
        `;
        break;

      case 'simple-list-slide':
        innerHTML = `
            <h1>${slide.icon} ${slide.title}</h1>
            <ul>
                ${slide.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        break;

      // Puedes agregar más 'case' para nuevos tipos de diapositivas
    }

    slideElement.innerHTML = innerHTML;
    container.appendChild(slideElement);
  });
});