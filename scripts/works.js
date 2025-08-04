// Script específico para la página works
// Solo maneja el efecto de luz del mouse

document.addEventListener("DOMContentLoaded", function () {
  // Event listener para el efecto de luz
  const lightEffect = document.getElementById("lightEffect");

  if (lightEffect) {
    function handleMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      lightEffect.style.transform = `translate(${x - 500}px, ${y - 500}px)`;
    }

    window.addEventListener("mousemove", handleMouseMove);
  } else {
    console.log("Light effect element not found");
  }
});
