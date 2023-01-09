window.onload = function () {


    let form = document.querySelector(".productCreate-form");
    form.album.focus();


    form.addEventListener("submit", (event) => {
        let errores = [];

        let artista = document.getElementById("artista");
        let album = document.getElementById("album");
        let precio = document.getElementById("precio");
        let descripcion = document.getElementById("descripcion");
        let genero = document.getElementById("genero");
        let discografica = document.getElementById("discografica");
        let cover = document.getElementById("cover");
        let player = document.getElementById("player");
        let errorBox = document.querySelector(".error-box");
        let okButton = document.querySelector(".ok-button");


        //-----VALIDACION ARTISTA -------
        if (artista.value == "") {
            errores.push("Artista no puede quedar vacio")
            artista.classList.add('is-invalid')
        } else {
            artista.classList.add('is-valid')
            artista.classList.remove('is-invalid')
        }

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

        //-----VALIDACION GENERO -------
        if (genero.value == "") {
            errores.push("Genero no puede quedar vacio")
            genero.classList.add('is-invalid')
        } else {
            genero.classList.add('is-valid')
            genero.classList.remove('is-invalid')
        }

        //-----VALIDACION DISCOGRAFICA -------
        if (discografica.value == "") {
            errores.push("Discografica no puede quedar vacio")
            discografica.classList.add('is-invalid')
        } else {
            discografica.classList.add('is-valid')
            discografica.classList.remove('is-invalid')
        }

        //-----VALIDACION player -------
        if (player.value == "") {
            errores.push("El reproductor no puede quedar vacio")
            player.classList.add('is-invalid')
        }
        else if (player.value.length < 20) {
            errores.push("El reproductor tiene que tener al menos 20 caracteres!")
            player.classList.add('is-invalid')
        } else {
            player.classList.add('is-valid')
            player.classList.remove('is-invalid')
        }


        //----VALIDACION COVER -------
        let allowedExtensions = /(.jpg|.png|.jfif|.gif|.webp|.svg)$/i;

        if (cover.value == "") {
            errores.push("Tenes que subir una imagen")
            cover.classList.add('is-invalid')
        } else {
            if (cover.value) {
                if (!allowedExtensions.exec(cover.value)) {
                    errores.push('Las extensiones de archivo permitidas son: .jpg, .png, .gif, .jfif, .webp y .svg');
                }
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