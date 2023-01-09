window.onload = function () {

    var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 5000); 
    }

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
