const fs = require("fs");
const path = require("path");

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const data = JSON.parse(jsonData);
    return data
};


function recordame (req,res,next){

    if(req.cookies.recordame && !req.session.usuarioLogueado){
        const users = findAll();

        const userFound = users.find(function(user){
            return user.id == req.cookies.recordame
        })

        req.session.usuarioLogueado = {
            id: userFound.id,
            email: userFound.email,
            nombre: userFound.nombre,
            apellido: userFound.apellido,
            avatar: userFound.imagen
        };
    }
    next()

}

module.exports = recordame;