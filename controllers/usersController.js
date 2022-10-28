const fs = require("fs");
const path = require("path");

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const data = JSON.parse(jsonData);
    return data
};

function create(data) {
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/users.json"), dataString)
};

const controller = {

    login: function(req, res){
        res.render("login", {style: "login"});
    },

    register: function(req, res){
        res.render("register", {style: "register"});
    },
    addUser: function(req, res){
        const data = findAll()

        const newUser = {
            id: data.length + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            contraseña: req.body.password,
            imagen: req.file.filename

        }

        data.push(newUser);

        create(data);

        res.redirect("/");
    }
}

module.exports = controller;