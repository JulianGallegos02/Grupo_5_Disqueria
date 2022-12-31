const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const { validationResult } = require("express-validator");

const Album = db.Album;
const Genre = db.genre;
const Artist = db.artists;
const Label = db.label;


const controller = {
    detalleProducto: async function (req, res) {

        let discoEncontrado = await Album.findByPk(req.params.id, {
            include: ["artists", "genre", "label", "format"]
        })

        res.render("productDetail", { style: "productDetail", discoEncontrado });
    },

    carrito: function (req, res) {
        res.render("productCart", { style: "productCart" });
    },

    lista: async function (req, res) {

        let disco = await Album.findAll({
            include: ["artists", "genre", "label", "format"]
        })

        res.render("productList", { style: "productList", disco })
    },

    create: async function (req, res) {
        let listaGenero = await Genre.findAll();
        let listaArtistas = await Artist.findAll();
        let listaDiscografica = await Label.findAll();

        res.render("productCreate", { style: "productCreate", generos: listaGenero, artistas: listaArtistas, listaDiscografica });
    },

    store: async (req, res) => {
        let listaGenero = await Genre.findAll();
        let listaArtistas = await Artist.findAll();
        let listaDiscografica = await Label.findAll();
        
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.render("productCreate", { errors: error.mapped(), style: "productCreate",  generos: listaGenero, artistas: listaArtistas, listaDiscografica })
        }

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
                    format: req.body.format
                }
            )

            .then(() => {
                return res.redirect("/products")
            })
            .catch(error => res.send(error))

    },

    edit: function (req, res) {
        let discoId = req.params.id;
        let discoEncontrado = Album.findByPk(discoId)
        let listaGenero = Genre.findAll();
        let listaDiscografica = Label.findAll();
        let listaArtistas = Artist.findAll();
        Promise
            .all([discoEncontrado, listaGenero, listaDiscografica, listaArtistas])
            .then(([disco, generos, label, artistas]) => {

                return res.render(path.resolve(__dirname, '..', "views", 'products', "productEdit"), { style: "productEdit", disco, generos, label, artistas })
            })

            .catch(error => res.send(error))
    },

    update: async function (req, res) {
        try {
            let discoId = req.params.id;
            let disco = await Album.findByPk(discoId)
            let generos = await Genre.findAll();
            let label = await Label.findAll();
            let artistas = await Artist.findAll();

            const error = validationResult(req)

            if (!error.isEmpty()) {
                 res.render(path.resolve(__dirname, '..', "views", 'products', "productEdit"), { errors: error.mapped(), style: "productEdit", disco, generos, label, artistas })
            }

            await Album
                .update({
                    name: req.body.album,
                    artist_id: req.body.artista,
                    genre_id: req.body.genero,
                    label_id: req.body.discografica,
                    image: req.file.filename,
                    description: req.body.descripcion,
                    price: req.body.precio,
                },
                    {
                        where: { id: discoId }
                    })

            res.redirect("/products");

        } catch {
            error => res.send(error)
        }

    },

    delete: function (req, res) {
        let albumId = req.params.id;
        Album
            .destroy({ where: { id: albumId }, force: true })
            .then(() => {
                return res.redirect('/products')
            })
            .catch(error => res.send(error))
    },
    artist: function (req, res) {

        res.render('artistCreate', { style: 'artistCreate' })
    },
    artistCreate: async function (req, res) {
        await Artist.create(
            {
                name: req.body.name,
                image: req.file.filename,
                description: req.body.description
            }
        )
        res.redirect('/products/create')
    },
    artistDetail: async function (req, res) {
        let artistaEncontrado = await Artist.findByPk(req.params.id, {
            include: ["albums"]
        });

        let discos = await Album.findAll({
            where: {
                artist_id: {
                    [Op.like]: req.params.id
                }
            }
        });

        res.render("artistDetail", { style: "artistDetail", artista: artistaEncontrado, discos })

    },

    search: async (req, res) => {
        let busquedaAlbum = req.body.search;

       let search = await Album.findAll({
            where: {

                    name: {
                            [Op.like]: '%' + busquedaAlbum + '%'
                           }                   
                    
                    }
        })
        let searchArtista = await Artist.findAll({
            where: {

                    name: {
                            [Op.like]: '%' + busquedaAlbum + '%'
                           }                   
                    
                    }
        })
            
        res.render('products/search', {style: "search", search, searchArtista })
    }

}

module.exports = controller;