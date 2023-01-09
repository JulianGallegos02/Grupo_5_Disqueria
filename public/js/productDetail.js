window.onload = function () {
    let opcionesFormato = document.querySelector(".opciones-formato")
    let elegirFormato = document.querySelector(".elegir-formato")
    let opcionFormato1 = document.getElementById("op1")
    let opcionFormato2 = document.getElementById("op2")
    let opcionFormato3 = document.getElementById("op3")
    let opcionFormato4 = document.getElementById("op4")
    
    
    function toggleMenu() {
        if (opcionesFormato.classList.contains("mostrar-opciones")) {
            opcionesFormato.classList.remove("mostrar-opciones");
        } else {
            opcionesFormato.classList.add("mostrar-opciones");
        }
      }

       
    function toggleFondo1() {
        if (opcionFormato1.classList.contains("seleccionado")) {
            opcionFormato1.classList.remove("seleccionado");
        } else {
            opcionFormato1.classList.add("seleccionado");
        }
      }
      function toggleFondo2() {
        if (opcionFormato2.classList.contains("seleccionado")) {
            opcionFormato2.classList.remove("seleccionado");
        } else {
            opcionFormato2.classList.add("seleccionado");
        }
      }
      function toggleFondo3() {
        if (opcionFormato3.classList.contains("seleccionado")) {
            opcionFormato3.classList.remove("seleccionado");
        } else {
            opcionFormato3.classList.add("seleccionado");
        }
      }
      function toggleFondo4() {
        if (opcionFormato4.classList.contains("seleccionado")) {
            opcionFormato4.classList.remove("seleccionado");
        } else {
            opcionFormato4.classList.add("seleccionado");
        }
      }
    
      elegirFormato.addEventListener("click", toggleMenu);
      opcionFormato1.addEventListener("click", toggleFondo1)
      opcionFormato2.addEventListener("click", toggleFondo2)
      opcionFormato3.addEventListener("click", toggleFondo3)
      opcionFormato4.addEventListener("click", toggleFondo4)

      /* Script Header */

    let menuPerfil = document.querySelector(".menuPerfil")
    let menuLogin = document.querySelector(".menuLogin")
    let avatar = document.querySelector(".avatar")
    let avatarPhone = document.querySelector(".avatarPhone")
    let burger = document.querySelector(".burger")

    function toggleMenu() {
        if (menuPerfil.classList.contains("showMenu")) {
            menuPerfil.classList.remove("showMenu");
        } else {
            menuPerfil.classList.add("showMenu");
        }
    }


    function toggleLogin() {
        if (menuLogin.classList.contains("showLogin")) {
            menuLogin.classList.remove("showLogin");
        } else {
            menuLogin.classList.add("showLogin");
        }
    }


    if(avatar){
        avatar.addEventListener("click", toggleMenu);
        avatarPhone.addEventListener("click", toggleMenu);
    }

    burger.addEventListener("click", toggleLogin);
    
    }