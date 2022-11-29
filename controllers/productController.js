const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const Album = db.Album;
const Genre = db.genre;

function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/products.json"));
    const data = JSON.parse(jsonData);
    return data
};

function create(data) {
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString)
};

const controller = {
    detalleProducto: function (req, res) {
        const data = findAll()

        const discoEncontrado = data.find(function (disco) {
            return disco.id == req.params.id
        });

        res.render("productDetail", { style: "productDetail", products: discoEncontrado });
    },

    carrito: function (req, res) {
        res.render("productCart", { style: "productCart" });
    },

    lista: function (req, res) {
        const data = findAll();

        res.render("productList", { style: "productList", products: data })
    },

    create: function (req, res) {
        res.render("productCreate", { style: "productCreate" });
    },

    store:  (req, res) =>{
        

         Album
         .create(
            {
                name: req.body.album,
                artist_id: req.body.artista,
                genre_id: req.body.genero,
                label_id: req.body.discografica,
                image: req.file.filename,
                description: req.body.descripcion,
                price: req.body.precio,
            }
        )

        .then(()=> {
            return res.redirect("/products")
        })
        .catch(error => res.send(error))

    }, 

    edit: function (req, res) {
        let discoId = req.params.id;
        let discoEncontrado = Album.findByPk(discoId)
        let listaGenero = Genre.findAll();
        Promise
        .all([discoEncontrado,listaGenero])
        .then(([disco,generos]) => {
       
         return res.render(path.resolve(__dirname, '..',"views",'products', "productEdit"), {style: "productEdit", disco,generos})})

         .catch(error => res.send(error))
    },

    update: function (req, res) {
        const data = findAll()
        const discoEncontrado = data.find(function (disco) {
            return disco.id == req.params.id
        })
        discoEncontrado.album = req.body.album;
        discoEncontrado.artista = req.body.artista;
        discoEncontrado.precio = Number(req.body.precio);
        discoEncontrado.descripcion = req.body.descripcion;
        discoEncontrado.genero = req.body.genero;
        discoEncontrado.discografica = req.body.discografica,
        discoEncontrado.imagen = req.file.filename;

        create(data);
        res.redirect("/products");
    },

    delete: function(req,res){
        const data = findAll()
        const nuevoArray = data.filter(function(disco){
            return disco.id != req.params.id

        })
        create(nuevoArray);
        res.redirect("/products");
    }


}

module.exports = controller;