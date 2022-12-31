window.onload = function () {


    let form = document.querySelector(".register-form");
    form.nombre.focus();

    form.addEventListener("submit", (event) => {
        let errores = [];

        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let avatar = document.getElementById("avatar");
        let errorBox = document.querySelector(".error-box");
        let okButton = document.querySelector(".ok-button");

        //-----VALIDACION NOMBRE -------
        if (nombre.value == "") {
            errores.push('El nombre no puede estar vacio')
            nombre.classList.add('is-invalid')
        }
        else if (nombre.value.length < 2) {
            errores.push('El nombre tiene que tener al menos 2 caracteres!')
            nombre.classList.add('is-invalid')
        } else {
            nombre.classList.add('is-valid')
            nombre.classList.remove('is-invalid')
        }

        //-----VALIDACION APELLIDO -------
        if (apellido.value == "") {
            errores.push('El apellido no puede estar vacio')
            apellido.classList.add('is-invalid')
        }
        else if (apellido.value.length < 2) {
            errores.push('El apellido tiene que tener al menos 2 caracteres!')
            apellido.classList.add('is-invalid')
        } else {
            apellido.classList.add('is-valid')
            apellido.classList.remove('is-invalid')
        }

        //-----VALIDACION EMAIL -------
        if (email.value == "") {
            errores.push("E-mail no puede quedar vacio")
            email.classList.add('is-invalid')
        } else {
            email.classList.add('is-valid')
            email.classList.remove('is-invalid')
        }

        //-----VALIDACION CONTRASEÑA -------
        if (password.value == "") {
            errores.push("Contraseña no puede quedar vacio")
            password.classList.add('is-invalid')
        }
        else if (password.value.length < 8) {
            errores.push("La contraseña tiene que tener al menos 8 caracteres!")
            password.classList.add('is-invalid')
        } else {
            password.classList.add('is-valid')
            password.classList.remove('is-invalid')
        }

        //----VALIDACION IMAGEN -------
        let allowedExtensions = /(.jpg|.png|.jfif|.gif|.webp|.svg)$/i;

        if (avatar.value == "") {
            errores.push("Tenes que subir una imagen")
            avatar.classList.add('is-invalid')
        } else {
            if (avatar.value) {
                if (!allowedExtensions.exec(avatar.value)) {
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
           errorBox.style.display = "inline-block"

           okButton.addEventListener("click", function(){
            errorBox.style.display = "none"

           })
        }



    })
}