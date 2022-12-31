window.onload = function () {


    let form = document.querySelector(".productEdit-form");

    form.addEventListener("submit", (event) => {
        let errores = [];

        let artista = document.getElementById("artista");
        let album = document.getElementById("album");
        let precio = document.getElementById("precio");
        let descripcion = document.getElementById("descripcion");
        let genero = document.getElementById("genero");
        let discografica = document.getElementById("discografica");
        let cover = document.getElementById("cover");



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
        let allowedExtensions = /(.jpg|.png|.jgif|.gif|.webp|.svg)$/i;

        if (cover.value == "") {
            errores.push("Tenes que subir una imagen")
            cover.classList.add('is-invalid')
        } else {
            if (cover.value) {
                if (!allowedExtensions.exec(cover.value)) {
                    errores.push('Extensión de imagen no permitida');
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
        }


    })
}