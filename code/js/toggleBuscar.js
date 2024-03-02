function toggleBuscar() {
  var searchBox = document.getElementById("search-box");
  if (searchBox.style.display === "flex") {
    // si la caja de búsqueda está visible
    searchBox.classList.remove("animate"); // entonces remueve la clase animate
    searchBox.classList.add("animate-out"); // y agrega la clase animate-out
    setTimeout(function () {
      // esto es el tiempo que tarda la animación en terminar
      searchBox.style.display = "none"; // oculta la caja de búsqueda
    }, 100); // 500 es el tiempo que tarda la animación en terminar
  } else {
    searchBox.style.display = "flex";
    searchBox.classList.remove("animate-out");
    searchBox.classList.add("animate");
  }
}
