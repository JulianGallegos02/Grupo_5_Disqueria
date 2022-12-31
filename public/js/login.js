window.onload = function () {


    let form = document.querySelector(".login-form");
    form.email.focus();

    form.addEventListener("submit", (event) => {
        let errores = [];
        
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let errorBox = document.querySelector(".error-box");
        let okButton = document.querySelector(".ok-button");
 

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
        } else {
            password.classList.add('is-valid')
            password.classList.remove('is-invalid')
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