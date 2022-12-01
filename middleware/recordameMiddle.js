const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require('sequelize');

let Users = db.users;

/*function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const data = JSON.parse(jsonData);
    return data
};*/


 async function recordame (req,res,next){

    if(req.cookies.recordame && !req.session.usuarioLogueado){
        const userFound = await Users.findOne({
            where: {
                id: req.cookies.recordame
            }
        })

       /* const userFound = users.find(function(user){
            return user.id == req.cookies.recordame
        })*/

        req.session.usuarioLogueado = {
            id: userFound.id,
            email: userFound.email,
            nombre: userFound.first_name,
            apellido: userFound.last_name,
            avatar: userFound.image,
            admin: userFound.admin
        };
    }
    next()

}

module.exports = recordame;