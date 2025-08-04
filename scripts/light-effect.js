// Script reutilizable para el efecto de luz del mouse
// Se puede usar en cualquier página que tenga un elemento con id="lightEffect"

document.addEventListener('DOMContentLoaded', function() {
  const lightEffect = document.getElementById('lightEffect');
  
  if (lightEffect) {
    function handleMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      lightEffect.style.transform = `translate(${x - 500}px, ${y - 500}px)`;
    }

    window.addEventListener('mousemove', handleMouseMove);
  }
});