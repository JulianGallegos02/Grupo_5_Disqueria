const fs = require("fs");
const path = require("path");

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
        res.render("productDetail", { style: "productDetail" });
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

    store: function (req, res) {
        const data = findAll()

        const newProduct = {
            id: data.length + 1,
            album: req.body.album,
            artista: req.body.artista,
            precio: Number(req.body.precio),
            descripcion: req.body.descripcion,
            genero: req.body.genero,
            imagen: req.body.cover
        }

        data.push(newProduct);

        create(data);

        res.redirect("/productList");

    },

    edit: function (req, res) {
        const data = findAll()
        const discoEncontrado = data.find(function (disco) {
            return disco.id == req.params.id
        })

        res.render("productEdit", {style: "productEdit", disco: discoEncontrado});
    },

    update: function (req, res) {
        const data = findAll()
        const discoEncontrado = data.find(function (disco) {
            return disco.id == req.params.id
        })
        discoEncontrado.album = req.body.album;
        discoEncontrado.artista = req.body.artista;
        discoEncontrado.precio = req.body.precio;
        discoEncontrado.descripcion = req.body.descripcion;
        discoEncontrado.genero = req.body.genero;
        discoEncontrado.imagen = req.body.cover;

        create(data);
        res.redirect("/productList");
    }
}

module.exports = controller;