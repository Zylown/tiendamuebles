function toggleCurrencyPicker(event) {
  var currencyPicker = document.getElementById("selector-moneda");
  currencyPicker.style.display =
    currencyPicker.style.display === "block" ? "none" : "block";

  // Detener la propagación del evento para evitar que se cierre inmediatamente
  event.stopPropagation();
}

// Configurar el elemento seleccionado por defecto
document.addEventListener("DOMContentLoaded", function () {
  var defaultCurrency = document.querySelector("#monedas .selected");
  var monedaSeleccionada = document.querySelector(".moneda-seleccionada");

  if (defaultCurrency && monedaSeleccionada) {
    monedaSeleccionada.textContent = defaultCurrency.textContent;
  }
});

// Cerrar el selector de moneda si se hace clic fuera de él
window.addEventListener("click", function (event) {
  var currencyPicker = document.getElementById("selector-moneda");
  var targetElement = event.target;

  if (
    currencyPicker.style.display === "block" &&
    !currencyPicker.contains(targetElement)
  ) {
    currencyPicker.style.display = "none";
  }
});
