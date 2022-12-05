const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require('sequelize');

let Users = db.users;

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

    login: function (req, res) {
        res.render("login", { style: "login" });
    },
    processLogin: async function (req, res) {

        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.render("login", { errors: error.mapped(), style: "login" })
        }

        let userFound = await Users.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!userFound) {
            return res.render("login", { errorLogin: "Credenciales invalidas!", style: "login" })
        } else {

            req.session.usuarioLogueado = {
                id: userFound.id,
                email: userFound.email,
                nombre: userFound.first_name,
                apellido: userFound.last_name,
                avatar: userFound.image,
                admin: userFound.admin
            }
            if (req.body.remember) {
                res.cookie("recordame", userFound.id)
            }

            res.redirect("/")
        }
    },

    logout: function (req, res) {

        req.session.destroy()
        res.clearCookie("recordame");
        res.redirect("/");
    },

    register: function (req, res) {
        res.render("register", { style: "register" });
    },

    addUser: async function (req, res) {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            console.log(error.mapped())
            return res.render("register", { errors: error.mapped(), style: "register" })
        }
        await Users.create({
            first_name: req.body.nombre,
            last_name: req.body.apellido,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file.filename
        })
        res.redirect("/");

    },
    perfil: async function (req, res) {
        let userId = req.params.id;
        let usuarioEncontrado = await Users.findByPk(userId);

        res.render("perfil", { style: "perfil", usuarioEncontrado });
    },
    admin: function (req, res) {
        res.render("admin", { style: "admin" });
    },
    userEdit: async function (req, res) {

        let userId = req.params.id;
        let usuarioEncontrado = await Users.findByPk(userId);

        res.render("userEdit", { style: "userEdit", usuarioEncontrado });
    },
    userUpdate: async function (req, res) {
        try {
            let userId = req.params.id;

            await Users
                .update({
                    first_name: req.body.nombre,
                    last_name: req.body.apellido,
                    email: req.body.email,
                    image: req.file.filename,
                },
                    {
                        where: { id: userId }
                    })

            res.redirect("/users/perfil/" + userId)

        } catch {
            error => res.send(error)
        }
    },
    delete: function (req, res) {
        let userId = req.params.id;
        Users
            .destroy({ where: { id: userId }, force: true })
            .then(() => {
                return res.redirect('/')
            })
            .catch(error => res.send(error))
    }
}

module.exports = controller;