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

        if(nombre.value == ""){
            errores.push("Nombre no puede quedar vacio")
        }
        if(apellido.value == ""){
            errores.push("Apellido no puede quedar vacio")
        }
        if(email.value == ""){
            errores.push("E-mail no puede quedar vacio")
        }
        if(password.value == ""){
            errores.push("Contraseña no puede quedar vacio")
        }
        if(avatar.value == ""){
            errores.push("Este campo no puede quedar vacio")
        }

        if(errores.length > 0){
            event.preventDefault();
            let listaErrores = document.querySelector(".errores")
            for (let i = 0; i < errores.length; i++) {
                listaErrores.innerHTML += "<li>" + i + "</li>"
                
            }
        }
    })
}