window.onload = function () {
let menuPerfil = document.querySelector(".menuPerfil")
let avatar = document.querySelector(".avatar")


function toggleMenu() {
    if (menuPerfil.classList.contains("showMenu")) {
        menuPerfil.classList.remove("showMenu");
    } else {
        menuPerfil.classList.add("showMenu");
    }
  }

  avatar.addEventListener("click", toggleMenu);
}