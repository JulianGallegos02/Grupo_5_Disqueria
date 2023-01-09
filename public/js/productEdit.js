window.onload = function () {


    let form = document.querySelector(".edit");
    form.album.focus();


    form.addEventListener("submit", (event) => {
        let errores = [];

        let album = document.getElementById("album");
        let precio = document.getElementById("precio");
        let descripcion = document.getElementById("descripcion");
        let cover = document.getElementById("cover");
        let errorBox = document.querySelector(".error-box");
        let okButton = document.querySelector(".ok-button");



        //-----VALIDACION ALBUM -------
        if (album.value == "") {
            errores.push("Album no puede quedar vacio")
            album.classList.add('is-invalid')
        } else {
            album.classList.add('is-valid')
            album.classList.remove('is-invalid')
        }

        //-----VALIDACION PRECIO -------
        if (precio.value == "") {
            errores.push("Precio no puede quedar vacio")
            precio.classList.add('is-invalid')
        } else {
            precio.classList.add('is-valid')
            precio.classList.remove('is-invalid')
        }

        //-----VALIDACION DESCRIPCION -------
        if (descripcion.value == "") {
            errores.push("Descripcion no puede quedar vacio")
            descripcion.classList.add('is-invalid')
        }
        else if (descripcion.value.length < 20) {
            errores.push("La descripcion tiene que tener al menos 20 caracteres!")
            descripcion.classList.add('is-invalid')
        } else {
            descripcion.classList.add('is-valid')
            descripcion.classList.remove('is-invalid')
        }



        //----VALIDACION COVER -------
        let allowedExtensions = /(.jpg|.png|.jfif|.gif|.webp|.svg)$/i;

            if (cover.value) {
                if (!allowedExtensions.exec(cover.value)) {
                    errores.push('Las extensiones de archivo permitidas son: .jpg, .png, .gif, .jfif, .webp y .svg');
                }
            
        }


        if (errores.length > 0) {
            event.preventDefault();
            let listaErrores = document.querySelector(".errores")
            listaErrores.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                listaErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }

            errorBox.style.display = "inline-block"

            okButton.addEventListener("click", function () {
                errorBox.style.display = "none"

            })
        }


    })

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