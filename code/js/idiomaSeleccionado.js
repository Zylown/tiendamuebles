function toggleIdiomaSeleccionado(event) {
  var idiomaSeleccionado = document.getElementById("selector-idioma");
  idiomaSeleccionado.style.display =
    idiomaSeleccionado.style.display === "block" ? "none" : "block";

  // Detener la propagación del evento para evitar que se cierre inmediatamente
  event.stopPropagation();
}

// Configurar el elemento seleccionado por defecto
document.addEventListener("DOMContentLoaded", function () {
  var defaultIdioma = document.querySelector("#idiomas .selected");
  var idiomaSelect = document.querySelector(".idioma-seleccionada");

  if (defaultIdioma && idiomaSelect) {
    idiomaSelect.textContent = defaultIdioma.textContent;
  }
});

// Cerrar el selector de moneda si se hace clic fuera de él
window.addEventListener("click", function (event) {
  var idiomaSeleccionado = document.getElementById("selector-idioma");
  var targetElement = event.target;

  if (
    idiomaSeleccionado.style.display === "block" &&
    !idiomaSeleccionado.contains(targetElement)
  ) {
    idiomaSeleccionado.style.display = "none";
  }
});
