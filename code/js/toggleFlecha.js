function toggleFlecha(flecha) {
  if (flecha.style.display === "flex") {
    flecha.classList.remove("animate-flecha");
    flecha.classList.add("animate-out-flecha");
    setTimeout(function () {
      flecha.style.display = "none";
    }, 600);
  } else {
    flecha.style.display = "flex";
    flecha.classList.remove("animate-out-flecha");
    flecha.classList.add("animate-flecha");
  }
}
