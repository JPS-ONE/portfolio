// import Atropos library
import Atropos from 'atropos';
import 'atropos/css'
import './light-effect.js';


// Initialize Atropos for each project item
document.querySelectorAll('.my-atropos').forEach((element) => {
    Atropos({
      el: element,
      activeOffset: 80,
      shadowScale: 1.5,
      rotateTouch: 'scroll-y'
    });
  });

// Obtén el elemento <h4> por su ID
const textElement = document.getElementById('typewriter');

// Obtén el texto completo del elemento
const fullText = textElement.textContent;

// Borra el contenido del elemento <h4>
textElement.textContent = '';

// Función para mostrar el texto como una máquina de escribir
function typeWriter(text, i) {
    if (i < text.length) {
        // Agrega un carácter al texto en el elemento <h4>
        textElement.textContent += text.charAt(i);
        
        // Llama a la función recursivamente después de un intervalo de tiempo
        setTimeout(() => {
            typeWriter(text, i + 1);
        }, 40); // Ajusta la velocidad de escritura aquí
    } else {
        // Cuando la animación termina, agrega una clase al elemento <h4>
        textElement.classList.add('animation-finished');
    }
}

// Inicia la animación de máquina de escribir
typeWriter(fullText, 0);

// El efecto de luz ahora se maneja en light-effect.js
