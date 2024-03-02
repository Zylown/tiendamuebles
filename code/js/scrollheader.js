window.addEventListener("scroll", function () {
  var header = document.querySelector(".envoltura__header");
  var scrollPosition = window.scrollY;

  // Ajusta la altura a la que se aplica la sombra según sea necesario
  var shadowTriggerHeight = 100; // 100 viene a ser el alto del header en px

  if (scrollPosition > shadowTriggerHeight) {
    // osea si el scroll es mayor a 100px se aplica la sombra
    header.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 0px 7px";
  } else {
    header.style.boxShadow = "none";
  }
});
