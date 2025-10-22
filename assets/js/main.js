// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa Reveal.js
    Reveal.initialize({
        controls: true,
        progress: true,
        center: true,
        hash: true,
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight]
    });

    const slidesContainer = document.querySelector('.slides');

    slideContent.forEach((slideData, index) => {
        const section = document.createElement('section');
        section.classList.add('slide-section'); // Clase para estilos generales si los hay

if (slideData.layout) {
    // Divide la cadena por espacios y añade cada clase por separado
    slideData.layout.split(' ').forEach(cls => section.classList.add(cls));
}

// --- INICIO DE LA MODIFICACIÓN ---

        // LÓGICA CONDICIONAL: Si el layout es 'split', usa una estructura especial.
        if (slideData.layout && slideData.layout.includes('layout-split')) {
            // El título va primero y fuera del wrapper.
            if (slideData.title) {
                const h2 = document.createElement('h2');
                h2.textContent = slideData.title;
                section.appendChild(h2);
            }

            // 1. Crear el contenedor que espera el CSS.
            const wrapper = document.createElement('div');
            wrapper.className = 'content-wrapper';

            // 2. Crear un div para el contenido de texto.
            const textContentDiv = document.createElement('div');
            if (slideData.content) {
                textContentDiv.innerHTML = slideData.content;
            }
            wrapper.appendChild(textContentDiv);

            // 3. Añadir la imagen como hermana del texto, dentro del wrapper.
            if (slideData.image) {
                const img = document.createElement('img');
                const imgSrc = typeof slideData.image === 'string' ? slideData.image : slideData.image.src;
                const imgAlt = typeof slideData.image === 'object' ? slideData.image.alt : '';
                img.src = imgSrc;
                img.alt = imgAlt || `Imagen de la diapositiva ${index + 1}`;
                img.classList.add('slide-image');
                wrapper.appendChild(img);
            }
            section.appendChild(wrapper);

        } else {
            // LÓGICA ORIGINAL: Para todos los demás layouts, mantener la estructura simple.
            if (slideData.title) {
                const h2 = document.createElement('h2');
                h2.textContent = slideData.title;
                section.appendChild(h2);
            }
            if (slideData.subtitle) {
                const p = document.createElement('p');
                p.textContent = slideData.subtitle;
                section.appendChild(p);
            }
            if (slideData.content) {
                const contentDiv = document.createElement('div');
                contentDiv.innerHTML = slideData.content;
                section.appendChild(contentDiv);
            }
            if (slideData.image) {
                const img = document.createElement('img');
                const imgSrc = typeof slideData.image === 'string' ? slideData.image : slideData.image.src;
                const imgAlt = typeof slideData.image === 'object' ? slideData.image.alt : '';
                img.src = imgSrc;
                img.alt = imgAlt || `Imagen de la diapositiva ${index + 1}`;
                img.classList.add('slide-image');
                section.appendChild(img);
            }
        }

        // El código para el botón del cuaderno se mantiene igual y al final.
        if (slideData.workbookLink && slideData.workbookLink.url) {
            const button = document.createElement('a');
            button.href = slideData.workbookLink.url;
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
            button.className = 'workbook-button';
            button.textContent = slideData.workbookLink.text || 'Abrir Cuaderno de Ejercicio';
            section.appendChild(button);
        }

        // --- FIN DE LA MODIFICACIÓN ---

        slidesContainer.appendChild(section);
    });
});